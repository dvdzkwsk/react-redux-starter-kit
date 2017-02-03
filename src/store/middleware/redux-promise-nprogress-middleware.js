import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default (store) => (next) => (action) => {
  if (action.type) {
    // TODO use import as soon as https://github.com/pburtchaell/redux-promise-middleware/pull/144 is merged
    if (action.type.endsWith('PENDING')) {
      NProgress.start()
    } else if (action.type.endsWith('FULFILLED') || action.type.endsWith('REJECTED')) {
      NProgress.done()
    }
  }
  return next(action)
}
