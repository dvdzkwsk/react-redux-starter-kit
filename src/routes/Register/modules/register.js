import axios from 'axios'
import { browserHistory } from 'react-router'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'

// ------------------------------------
// Actions
// ------------------------------------
export const register = (values, dispatch) => (dispatch, getState) => axios.post('users', JSON.stringify(values))

export const registerSucceed = (result, dispatch) => {
  browserHistory.push('/login')
  return result
}

export const registerFailed = (errors, dispatch, submitError) => dispatch({
  type: ERROR_OCCURRED,
  payload: submitError
})

export const actions = {}

const REGISTER_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function registerReducer (state = initialState, action) {
  const handler = REGISTER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
