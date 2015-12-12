import _debug from 'debug';

const debug = _debug('kit:config');
debug('Create configuration.');
import base from './_base';

debug(`Apply environment overrides for NODE_ENV "${base.env}".`);
let overrides;
try {
  overrides = require(`./_${base.env}`)(base);
} catch (e) {
  debug(
    `No configuration overrides found for NODE_ENV "${base.env}"`
  );
}

export default Object.assign({}, base, overrides);
