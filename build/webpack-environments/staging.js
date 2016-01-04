import _debug from 'debug'

// Want to deploy to other environments but don't want to write
// an entirely new set of webpack overrides? You can just export
// the desired overrides and everything will _just work_.
_debug('app:webpack:staging')('Export production configuration.')
import production from './production'
export default production
