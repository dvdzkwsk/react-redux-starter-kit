/*  Creates a reducer from an object of action handlers. See:
    http://redux.js.org/docs/recipes/ReducingBoilerplate.html#reducers */

export default function createReducer (initialState, actionHandlers) {
  return (state = initialState, action) => {
    const handler = actionHandlers[action.type]

    return handler ? handler(state, action) : state
  }
}
