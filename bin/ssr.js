/**
 * Server side rendering
 *
 * Created December 11th, 2015
 * @author: ywarezk
 * @version: 0.18
 *
 */

// i want to use babel for the server syntax
require("babel-core/register");

//we have so scss imports which doesnt play well on our server logic
require.extensions['.scss'] = function(module, filename) {};


//if (process.env.NODE_ENV !== "production") {
//	if (!require("piping")({hook: true, includeModules: true})) {
//		return;
//	}
//}

module.exports = require('../server/hapi');
