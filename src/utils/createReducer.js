export function createReducer (initialState, fnMap) {
  // possible use of rest arguments: https://github.com/rackt/redux/issues/749#issuecomment-141570236
  return (state = initialState, action, ...rest) => {
    const { type, payload } = action;
    const handler = fnMap[type];

    return handler ? handler(state, payload, ...rest) : state;
  };
}

export default createReducer;
