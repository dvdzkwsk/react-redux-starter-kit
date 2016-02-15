/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 * GET     /api/things/:id          ->  show
 * PUT     /api/things/:id          ->  update
 * DELETE  /api/things/:id          ->  destroy
 */

import _ from 'lodash';
import Thing from './thing.model';

function respondWithResult(ctx, statusCode = 200) {
  return function(entity) {
    ctx.status = statusCode;
    ctx.body = entity;
  };
}

function handleResourceNotFound(ctx, statusCode = 404) {
  return function(entity) {
    ctx.status = statusCode;
    ctx.body = { message: `${entity} not found` };
  };
}

function handleError(ctx, statusCode = 500) {
  return function(err) {
    ctx.status = statusCode;
    ctx.body = { message: err.message };
  };
}

// Gets a list of Things
export async function index(ctx, next) {
  try {
    const things = await Thing.find();
    respondWithResult(ctx)(things);
  } catch (err) {
    handleError(ctx, err);
  }
}

// Gets a single Thing from the DB
export async function show(ctx, next) {
  try {
    const thing = await Thing.findById(ctx.params.id);
    if (!thing) return handleResourceNotFound(ctx); 
    respondWithResult(ctx)(thing);
  } catch (err) {
    handleError(ctx, err);
  }
}

// Creates a new Thing in the DB
export async function create(ctx, next) {
  try {
    const thing = await Thing.create(ctx.request.body);
    respondWithResult(ctx, 201)(thing);
  } catch (err) {
    handleError(ctx, err);
  }
}

// Updates an existing Thing in the DB
export async function update(ctx, next) {
  if (ctx.request.body._id) 
    delete ctx.request.body._id;
  
  try { 
    const thing = await Thing.findById(ctx.params.id);
    if (!thing) return handleResourceNotFound(ctx);

    const updated = await _.merge(thing, ctx.request.body)
                           .save();

    respondWithResult(ctx)(updated);
  } catch (err) {
    handleError(res);
  }
}

// Deletes a Thing from the DB
export async function destroy(ctx, next) {
  try {
    const thing = Thing.findById(ctx.params.id);
    if (!thing) return handleResourceNotFound(ctx);

    await thing.remove();

    respondWithResult(ctx, 204)();
  } catch (err) {
    handleError(res);
  }
}
