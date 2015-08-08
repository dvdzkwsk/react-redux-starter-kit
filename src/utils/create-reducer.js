export default function createReducer (reducerMap) {
  return (state, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}
