import Rx from 'rxjs'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const DOUBLE_ASYNC_PENDING = 'DOUBLE_ASYNC_PENDING'
export const DOUBLE_ASYNC_ABORTED = 'DOUBLE_ASYNC_ABORTED'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-observable!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () =>
  (actions, store) =>
    Rx.Observable.of(increment(store.getState().counter))
      .delay(500)
      .takeUntil(actions.ofType(DOUBLE_ASYNC_ABORTED))
      .startWith({ type: DOUBLE_ASYNC_PENDING })

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 5
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
