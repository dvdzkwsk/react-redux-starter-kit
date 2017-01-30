import jQuery from 'jquery'

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
export const postForm = () => {
  return (dispatch, getState) => {
    const data = JSON.stringify(getState().form.registerForm.values)
    dispatch({
      type: SUBMIT_REGISTER_FORM,
      payload: new Promise(function(resolve, reject) {
        jQuery.post({
          url: 'http://127.0.0.1:3001',
          contentType: 'application/json',
          data,
          success: resolve,
          error: reject
        })
      })
    })
  }
}

export const actions = {
  postForm
}

const REGISTER_ACTION_HANDLERS = {
  [SUBMIT_REGISTER_FORM_PENDING]: (state) => {
    return ({ ...state, submitting: true })
  },
  [SUBMIT_REGISTER_FORM_FULFILLED]: (state) => {
    return ({ ...state, submitting: false })
  },
  [SUBMIT_REGISTER_FORM_REJECTED]: (state) => {
    return ({ ...state })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { submitting: false }
export default function registerReducer (state = initialState, action: Action) {
  const handler = REGISTER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
