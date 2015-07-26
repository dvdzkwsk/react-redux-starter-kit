import { DIST_DIRNAME } from '../../../config';

export default (config) => {
  config.singleRun = true;
  config.reporters = ['spec', 'coverage'];
  config.coverageReporter = {
    type : 'html',
    dir  : `${DIST_DIRNAME}/coverage/`
  };

  return config;
};
