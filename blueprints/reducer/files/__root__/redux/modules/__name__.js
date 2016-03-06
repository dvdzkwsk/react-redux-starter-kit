/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const ACTIONTYPE = 'ACTIONTYPE'
// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
export const <%= pascalEntityName %>Action = (payload: Object): Action => ({
  // employee: string, loginTime: number, company: string
  type: ACTIONTYPE,
  payload: payload
})

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.

export const request<%= pascalEntityName %> = (email: string, password: string): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        resolve()
      }, 10)
    })
  }
}

export const actions = {
  <%= pascalEntityName %>Action,
  request<%= pascalEntityName %>
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export type <%= pascalEntityName %>State = {}

const initialState: <%= pascalEntityName %>State = {}
const ACTION_HANDLERS = {
  [ACTIONTYPE]: (state: <%= pascalEntityName %>State, action): <%= pascalEntityName %>State => ({...state, ...action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function authReducer (state: <%= pascalEntityName %>State = initialState, action: Action): <%= pascalEntityName %>State {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
