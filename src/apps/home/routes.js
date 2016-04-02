export default {
  path: 'home',
  getComponent (location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./views/HomeView/HomeView').default)
    })
  }
}
