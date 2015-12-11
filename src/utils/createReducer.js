export function createReducer (initialState, fnMap) {
  return (state = initialState, action) => {
    const { type, payload } = action;
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}

export default createReducer;
