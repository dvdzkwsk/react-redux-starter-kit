import config from '../../config';
import base   from './_base'

export default require(`./_${config.env}`)(base);
