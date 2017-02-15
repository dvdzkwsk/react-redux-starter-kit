import _ from 'lodash'

export const succType = (actionType) => {
  return actionType + '_SUCC'
}

export const failType = (actionType) => {
  return actionType + '_FAIL'
}

export const serialize = (json) => {
  let ret = ''
  for (let k in json) {
    if (typeof json[k] === 'string') {
      ret = ret + k + '=' + json[k] + '&'
    } else if (json[k] !== undefined) {
      ret = ret + k + '=' + JSON.stringify(json[k]) + '&'
    }
  }
  if (ret !== '') ret = ret.substring(0, ret.length - 1)
  return ret
}

export const unserialize = (str) => {
  let obj = {}
  str.split('&').map((arg) => {
    let tmp = arg.split('=')
    obj[tmp[0]] = tmp[1]
  })
  return obj
}

export const objFilter = (obj, filter) => {
  return _.transform(obj, (result, n, key) => {
    if (_.indexOf(filter, key) !== -1) {
      if (_.isString(n)) n = _.trim(n)
      result[key] = n
    }
  })
}
