import config from '../config'
import base from './webpack-environments/_base'

export default require(`./webpack-environments/${config.env}`)(base)
