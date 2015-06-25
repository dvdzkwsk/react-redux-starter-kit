< Wirk />
=========
[![Build Status](https://travis-ci.org/davezuko/wirk-starter.svg?branch=master)](https://travis-ci.org/davezuko/wirk-starter/)

A basic starter kit that gives you just enough boilerplate to start building Isomorphic React applications with Koa.js, while staying out of your way.

Features
--------
* Webpack build system for client and server builds
* Development scripts to enable live-reloading with hot module replacement
* Koa.js as a back-end server
* Jade for html pre-processing
* Easy environment-specific configuration, which already includes:
  * Client bundle splitting in production mode
  * CSS Extraction in production mode

Installation
-------------

Install project dependencies with:
```
npm run setup
```

And then you can either run the development server with `npm run dev` or `npm run dev:quiet`, or compile the application to disk for use with the server: `npm run build && npm run server:start`.
