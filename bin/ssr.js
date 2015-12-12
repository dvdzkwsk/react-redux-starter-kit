/**
 * Server side rendering
 *
 * Created December 11th, 2015
 * @author: ywarezk
 * @version: 0.18
 *
 */


require("babel-core/register");

/**
 * when running to scss files do nothing, they are already compiled and put in the dist folder
 * @param module
 * @param filename
 */
require.extensions['.scss'] = function(module, filename) {};


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

module.exports = require('../server/hapi');
