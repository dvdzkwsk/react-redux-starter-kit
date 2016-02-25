/* eslint key-spacing:0 */
export default () => ({
  mongo_uri                : 'mongodb://localhost/fullstack-react',
  secrets_session          : 'fullstack-react-secret',
  compiler_fail_on_warning : false,
  compiler_hash_type       : 'chunkhash',
  compiler_devtool         : null,
  compiler_stats           : {
    chunks : true,
    chunkModules : true,
    colors : true
  }
});
