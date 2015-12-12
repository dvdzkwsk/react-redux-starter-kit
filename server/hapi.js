/**
 * We are going to use hapi to server side render our application.
 * Inspired by: https://github.com/luandro/hapi-universal-redux
 *
 *
 * Created December 11th, 2015
 * @author: ywarezk
 * @version: 0.18
 *
 */

/*******************
 * begin imports
 *******************/

console.log('1');

import {Server} from "hapi";
import h2o2 from "h2o2";
import inert from "inert";
import React from "react";
import ReactDOM from "react-dom/server";
import {RoutingContext, match} from "react-router";
import createLocation from "history/lib/createLocation";
import configureStore from "../src/store/configureStore";
import { Provider } from 'react-redux';
import routes from "../src/routes";
import url from "url";
const fs = require('fs');
const config = require('../config');
const paths  = config.utils_paths;

/*******************
 * end imports
 *******************/

console.log('2');

/**
 * Create Redux store, and get intitial state.
 */
const store = configureStore();
const initialState = store.getState();

/**
 * Start Hapi server on port 8000.
 */
const hostname = process.env.HOSTNAME || "localhost";
const restHostUrl = process.env.SERVER_URL || "localhost";
const restHostProtocol = process.env.SERVER_PROTOCOL || "http";
const restHostPort = process.env.SERVER_PROTOCOL || "1337";

const server = new Server();
server.connection({host: hostname, port: process.env.PORT || 8000});
server.register(
	[
		h2o2,
		inert,
		// WebpackPlugin
	],
	(err) => {
	if (err) {
		throw err;
	}

	server.start(() => {
		console.info("==> ✅  Server is listening");
		console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
	});
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
	method:  "GET",
	path:    "/{params*}",
	handler: {
		file: (request) => "static" + request.path
	}
});

/**
 * Endpoint that proxies all api requests to our backend
 */
server.route({
	method: "GET",
	path: "/api/{path*}",
	handler: {
		proxy: {
			passThrough: true,
			mapUri (request, callback) {
				callback(null, url.format({
					protocol: restHostProtocol,
					host:     restHostUrl,
					pathname: request.params.path,
					query:    request.query,
					port: restHostPort
				}));
			},
			onResponse (err, res, request, reply, settings, ttl) {
				reply(res);
			}
		}
	}
});


/**
 * Catch dynamic requests here to fire-up React Router.
 */
server.ext("onPreResponse", (request, reply) => {
	if (typeof request.response.statusCode !== "undefined") {
    	return reply.continue();
  	}

	//let location = createLocation(request.path);

	match({routes, location: request.path}, (error, redirectLocation, renderProps) => {
		if (redirectLocation) {
	  		reply.redirect(redirectLocation.pathname + redirectLocation.search)
		}
		else if (error || !renderProps) {
	  		reply.continue();
		}
		else {
			const reactString = ReactDOM.renderToString(
				<Provider store={store}>
					<RoutingContext {...renderProps} />
				</Provider>
			);

			const webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";

			const template = fs.readFileSync(paths.dist('index.html'), 'utf-8');
			const injectedManifest = template.replace(
				new RegExp(`<div id="root">`),
				`<div id="root">` + reactString
			);
			reply(injectedManifest);


		}
	});
});
