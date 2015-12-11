/**
 * Server side rendering
 *
 * Created December 11th, 2015
 * @author: ywarezk
 * @version: 0.18
 *
 */


require("babel-core/register")({
	stage: 0
	// only: /src/,
	// presets: ["es2015", "react", "stage-0"]
});

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
