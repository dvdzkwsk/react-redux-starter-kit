import {
  default as createStore
} from 'store/createStore'

describe('(Store) createStore', () => {
  it('should have an empty asyncReducers object', () => {
    let store = createStore()
    expect(typeof store.asyncReducers).toBe('object')
    expect(store.asyncReducers).toEqual({})
  })

  describe('(Location)', () => {
    it('store should be initialized with Location state', () => {
      let store = createStore()
      const location = {
        pathname : '/echo'
      }
      store.dispatch({
        type    : 'LOCATION_CHANGE',
        payload : location
      })
      expect(store.getState().location).toEqual(location)
    })
  })
})
