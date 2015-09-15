import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

const initialState = 0;
export default createReducer(initialState, {
  [COUNTER_INCREMENT] : (state) => state + 1
});
