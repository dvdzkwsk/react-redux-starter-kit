// We use an explicit public path when the assets are served by webpack
// to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
export default (config) => ({
  mongo_uri           : 'mongodb://localhost/fullstack-react-dev',
  secrets_session     : 'fullstack-react-dev-secret',
  compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
  proxy               : {
    enabled: false,
    options: {
      // koa-proxy options
      host: 'http://localhost:8000',
      match: /^\/api\/.*/
    }
  }
})
