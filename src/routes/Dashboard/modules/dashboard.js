import { get } from 'utils/request'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_ACTIVE_INQUIRIES = 'UPDATE_ACTIVE_INQUIRIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateActiveInquiries (inquiries) {
  return {
    type    : UPDATE_ACTIVE_INQUIRIES,
    payload : inquiries
  }
}

export const getActiveInquiries = (email, password) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/inquiries', {
        query: {
          active: true
        },
        accessToken: getState().login.accessToken
      })
      .then(function (response) {
        console.log(response)
        dispatch(updateActiveInquiries(response))
        resolve()
      })
      .catch(function (error) {
        console.warn(error)
        resolve()
      })
    })
  }
}

export const actions = {
  getActiveInquiries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_ACTIVE_INQUIRIES]: (state, { payload }) => {
    return {
      activeInquiries: payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  activeInquiries: []
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
