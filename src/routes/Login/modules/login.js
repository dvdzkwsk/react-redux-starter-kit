import axios from 'axios'
import { browserHistory } from 'react-router'

// ------------------------------------
// Constants
// ------------------------------------
export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM'
export const SUBMIT_LOGIN_FORM_PENDING = `${SUBMIT_LOGIN_FORM}_PENDING`
export const SUBMIT_LOGIN_FORM_FULFILLED = `${SUBMIT_LOGIN_FORM}_FULFILLED`
export const SUBMIT_LOGIN_FORM_REJECTED = `${SUBMIT_LOGIN_FORM}_REJECTED`

// ------------------------------------
// Actions
// ------------------------------------
export const postForm = () => {
  return (dispatch, getState) => {
    const data = JSON.stringify(getState().form.loginForm.values)

    dispatch({
      type: SUBMIT_LOGIN_FORM,
      payload: axios.post(
        'Users/login',
        data,
      ).then((response) => {
        axios.defaults.headers.common['Authorization'] = response.data.id
        browserHistory.push('/semesters')
      })
    })
  }
}

export const actions = {
  postForm
}

const LOGIN_ACTION_HANDLERS = {
  [SUBMIT_LOGIN_FORM_PENDING]: (state) => {
    return ({ ...state, submitting: true })
  },
  [SUBMIT_LOGIN_FORM_FULFILLED]: (state) => {
    return ({ ...state, submitting: false })
  },
  [SUBMIT_LOGIN_FORM_REJECTED]: (state) => {
    return ({ ...state, submitting: false })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { submitting: false }
export default function loginReducer (state = initialState, action: Action) {
  const handler = LOGIN_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
