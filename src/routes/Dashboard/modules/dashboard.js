import fetch from 'isomorphic-fetch'

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
      fetch('https://api-beta.seekster.co/inquiries?active=true', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa('seekster-web:MF/Ez09QytEdI5pw0DtOdTip7zJzlM+ZGX6BVLzrJkBDe5wukUPeBFvMandUsDDzOAyFoE9LrRhbsrzETMEDRw==')}`,
          'X-Access-Token': getState().login.accessToken
        }
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        console.log(response)
        dispatch(updateActiveInquiries(response))
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
