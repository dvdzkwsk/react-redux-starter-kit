// We only need to import the modules necessary for initial render
// 我们只需要导入初始渲染所需的模块
import CoreLayout2 from '../layouts/CoreLayout2'
import Home from './Home'
import CounterRoute from './Counter'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
// 注意：不是用JSX，我们推荐使用反应路由器
// plainroute对象建立路径的定义

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout2,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    注：childroutes可以分块或加载程序
    使用getchildroutes以下签名：

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
    然而，这是没有必要的代码分裂！它只是提供了
    异步路由定义的API。你的代码分裂应该发生
    在路线` GetComponent `功能，因为它只被调用
    当路由存在和匹配时。
*/

export default createRoutes
