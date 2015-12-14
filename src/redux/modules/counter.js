import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------
const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const increment = (value = 1) => ({
  type: COUNTER_INCREMENT,
  payload: { value }
})

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(getState().counter))
    }, 1000)
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(0, {
  [COUNTER_INCREMENT]: (state, { value }) => state + value
})
