import Immutable from 'immutable';

export const UPDATE_INQUIRIES = 'UPDATE_INQUIRIES'
export const ADD_TO_INQUIRIES = 'ADD_TO_INQUIRIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateInquiries (inquiries) {
  return {
    type    : UPDATE_INQUIRIES,
    payload : inquiries
  }
}

export function addToInquiries (inquiry) {
  return {
    type    : ADD_TO_INQUIRIES,
    payload : inquiry
  }
}

export const actions = {
  updateInquiries, addToInquiries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_INQUIRIES]: (state, { payload }) => {
    return state.merge({
      inquiries: state.get('inquiries').merge(payload)
    })
  },
  [ADD_TO_INQUIRIES]: (state, { payload }) => {
    return state.merge({
      inquiries: state.get('inquiries').set(payload.order_number, payload)
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  inquiries: {}
})

export default function authenticationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
