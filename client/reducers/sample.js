import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as easy to customize as possibility we'll just define
// the constant here.
const SAMPLE_ACTION = 'SAMPLE_ACTION';
const initialState  = {
  message : 'Welcome to the React Redux Starter Kit!'
};

const actions = {
  [SAMPLE_ACTION] : (state, payload) => {
    console.log('sample action received.'); // eslint-disable-line

    // noop
    return state;
  }
};

export default function (state = initialState, action) {
  const handler = actions[action.type];

  return handler ? handler(state, action.payload) : state;
}
