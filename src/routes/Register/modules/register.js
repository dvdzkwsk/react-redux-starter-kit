import axios from 'axios'
import { browserHistory } from 'react-router'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'

// ------------------------------------
// Constants
// ------------------------------------
export const SUBMIT_REGISTER_FORM = 'SUBMIT_REGISTER_FORM'
export const SUBMIT_REGISTER_FORM_PENDING = `${SUBMIT_REGISTER_FORM}_PENDING`
export const SUBMIT_REGISTER_FORM_FULFILLED = `${SUBMIT_REGISTER_FORM}_FULFILLED`
export const SUBMIT_REGISTER_FORM_REJECTED = `${SUBMIT_REGISTER_FORM}_REJECTED`

// ------------------------------------
// Actions
// ------------------------------------
export const register = () => (dispatch, getState) => {
  const data = JSON.stringify(getState().form.registerForm.values)

  dispatch({
    type: SUBMIT_REGISTER_FORM,
    payload: axios
      .post('Users', data)
      .then((response) => browserHistory.push('/login'))
      .catch((err) => {
        dispatch({ type: ERROR_OCCURRED, payload: err })
        throw err
      })
  })
}

export const actions = {
  register
}

const REGISTER_ACTION_HANDLERS = {
  [SUBMIT_REGISTER_FORM_PENDING]: (state) => ({ ...state, submitting: true }),
  [SUBMIT_REGISTER_FORM_FULFILLED]: (state) => ({ ...state, submitting: false }),
  [SUBMIT_REGISTER_FORM_REJECTED]: (state) => ({ ...state, submitting: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { submitting: false }
export default function registerReducer (state = initialState, action) {
  const handler = REGISTER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
