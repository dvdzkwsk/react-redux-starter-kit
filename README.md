< Wirk />
=========
[![Build Status](https://travis-ci.org/davezuko/wirk-starter.svg?branch=master)](https://travis-ci.org/davezuko/wirk-starter/)

A basic starter kit that gives you just enough boilerplate to start building Isomorphic React applications with Koa.js, while staying out of your way.

Requirements
------------
IO.js is recommended, with --harmony flag enabled if you're not using our predefined npm scripts.

Features
--------
* Webpack
  * Separate client and server bundles
  * Default loaders for `.js`, `.jsx` and `.css` (relax, it's with PostCSS)
  * Hot Module Replacement with the help of React Hot Loader
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

Once this is done, you can either run the development server with

```
npm run dev

// or

npm run dev:quiet // disables verbose debugging
```

or compile the application to disk for use with the server

```
npm run build && npm run server:start
```

Configuration
-------------
Basic project configuration can be found in `~/confg/index.js` and includes options for source and dist directories, default ports, and a list of vendor dependencies (used for bundle splitting during client compilation). In the future this file will hopefully become more powerful so that the application can be more heavily tweaked without having to dig through the source.
