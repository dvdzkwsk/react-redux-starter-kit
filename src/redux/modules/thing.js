/* @flow */
import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_THING = 'GET_THING'
export const GET_THING_SUCCESS = 'GET_THING_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export const getThing = () => {
  return (dispatch, getState) => {
    return axios.get('/api/things')
      .then((res) => {
        dispatch(getThingSuccess(res.data))
      })
  }
}

export const getThingSuccess = (thing) => ({
  type: GET_THING_SUCCESS,
  payload: thing
})

export const actions = {
  getThing,
  getThingSuccess
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_THING_SUCCESS] (state, action) {
    return action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function thingReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
