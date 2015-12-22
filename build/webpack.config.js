import config from '../config'
import base from './webpack-environments/_base'

// We first load the configuration overrides for the current
// NODE_ENV and pass it the base (default) webpack configuration
// file. These overrides should export a function that expect a
// a configuration object which can be modified to suit the build
// requirements for that environment.
export default require(`./webpack-environments/${config.env}`)(base)
