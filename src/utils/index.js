import assign from 'object-assign';

export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    return assign(acc, {
      [constant] : constant
    });
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}
