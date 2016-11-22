import { FETCH_SUCCESS } from './constants'

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data
})

export const fetchData = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(fetchSuccess([{
          title: '热力图',
          children: [{
            title: '浏览热力图',
            url: '/heatmap'
          }]
        }, {
          title: 'NavOne',
          children: [{
            title: 'item1',
            type: 'drop',
            children: [{ title: 'option1', url: '/heatmap', type: 'option' }]
          }]
        }, {
          title: 'NavOne',
          children: [{
            title: 'item1',
            type: 'group',
            children: [{ title: 'option1', type: 'option' }]
          }, {
            title: 'item2',
            type: 'group',
            children: [{ title: 'option1', type: 'option' }]
          }]
        }]))
        resolve()
      }, 200)
    })
  }
}
