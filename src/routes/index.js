import CoreLayout from 'layouts/CoreLayout/CoreLayout'

export default (store) => {
  return {
    component: 'div',
    childRoutes: [ {
      path: '/',
      component: CoreLayout,
      indexRoute: { onEnter: (nextState, replace) => replace('/home') },
      childRoutes: [
        require('apps/home/routes').default
      ]
    } ]
  }
}
