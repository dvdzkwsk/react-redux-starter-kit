// Based on: https://github.com/dayAlone/koa-webpack-hot-middleware/blob/master/index.js   
export default function applyExpressMiddleware (fn, req, res) {   
  const originalEnd = res.end   
    
  return function (done) {    
    res.end = function () {   
      originalEnd.apply(this, arguments)    
      done(null, 0)   
    }   
    fn(req, res, function () {    
      done(null, 1)   
    })    
  }   
}
