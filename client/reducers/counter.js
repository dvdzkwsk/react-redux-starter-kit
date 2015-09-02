import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as easy to customize as possibility we'll just define
// the constant here.
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

const initialState = 0;

export default createReducer(initialState, {
  [COUNTER_INCREMENT] : (state, payload) => {
    return state + 1;
  }
});
