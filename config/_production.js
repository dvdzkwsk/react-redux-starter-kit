/* eslint key-spacing:0 */
export default () => ({
  compiler_public_path: '/',
  compiler_fail_on_warning : false,
  compiler_hash_type       : 'chunkhash',
  compiler_devtool         : null,
  compiler_stats           : {
    chunks : true,
    chunkModules : true,
    colors : true
  }
})
