/**
 * Server side rendering
 *
 * Created December 11th, 2015
 * @author: ywarezk
 * @version: 0.18
 *
 */


require("babel-core/register");


require.extensions['.scss'] = function(module, filename) {
	var ExtractTextPlugin = require('extract-text-webpack-plugin');
	debugger;
	return ExtractTextPlugin.extract(filename);
}


/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

if (process.env.NODE_ENV !== "production") {
	if (!require("piping")({hook: true, includeModules: true})) {
		return;
	}
}

console.log('Great Success');
module.exports = require('../server/hapi');
