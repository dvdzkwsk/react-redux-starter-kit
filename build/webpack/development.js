import webpackConfig from './_base';

webpackConfig.devtool = 'source-map';
webpackConfig.eslint.emitWarning = true;

export default webpackConfig;
