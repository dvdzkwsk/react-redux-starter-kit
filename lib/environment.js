const NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = exports = {
  NODE_ENV  : NODE_ENV,
  __DEV__   : NODE_ENV === 'development',
  __PROD__  : NODE_ENV === 'production'
};
