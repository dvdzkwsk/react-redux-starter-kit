import _debug from 'debug'
import config from './_base'
import environments from './environments'

const debug = _debug('app:config')
debug('Creating configuration.')
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)

const overrides = environments[config.env]
if (environments[config.env]) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found.')
}

export default config
