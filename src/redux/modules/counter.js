import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------
const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const increment = () => ({
  type: COUNTER_INCREMENT,
  payload: {
    value: 1
  }
})

export const actions = {
  increment
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(0, {
  [COUNTER_INCREMENT]: (state, { value }) => state + value
})
