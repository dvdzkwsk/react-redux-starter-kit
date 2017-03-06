import axios from 'axios'
import { browserHistory } from 'react-router'
import Cookies from 'js-cookie'
import { FETCHED_AUTH_TOKEN, AUTH_LOGOUT } from '../../../store/rootReducers/auth'
import { FETCHED_USER, USER_LOGOUT } from '../../../store/rootReducers/user'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'

// ------------------------------------
// Actions
// ------------------------------------
export const login = (values, dispatch) => (dispatch, getState) => {
  if (!values.rememberMe) values.ttl = 10800 // set ttl to 3h if not remember me
  return axios.post('users/login', JSON.stringify(values))
}

export const loginSucceed = (result, dispatch) => {
  const { data } = result

  const authToken = data.id
  const userId = data.userId

  axios.defaults.headers.common[ 'Authorization' ] = authToken
  Cookies.set('authToken', authToken, {
    expires: data.ttl / 60 / 60 / 24 // seconds to days
  })

  dispatch({ type: FETCHED_AUTH_TOKEN, payload: authToken })

  return axios.get(`users/${userId}`)
    .then((response) => {
      dispatch({ type: FETCHED_USER, payload: response.data })

      browserHistory.push('/semesters')
    })
    .catch((err) => {
      dispatch({ type: ERROR_OCCURRED, payload: err })
      throw err
    })
}

export const loginFailed = (errors, dispatch, submitError) => dispatch({
  type: ERROR_OCCURRED,
  payload: submitError
})

export const logout = (store) => {
  const { dispatch } = store
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: AUTH_LOGOUT })

  axios
    .post('users/logout')
    .catch((err) => {
      dispatch({ type: ERROR_OCCURRED, payload: err })
      throw err
    })

  delete axios.defaults.headers.common[ 'Authorization' ]
  Cookies.remove('authToken')

  browserHistory.push('/login')
}

export const actions = {}

const LOGIN_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { submitting: false }
export default function loginReducer (state = initialState, action) {
  const handler = LOGIN_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
