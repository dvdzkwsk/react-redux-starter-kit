import Promise from 'bluebird';
import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_STORY_META = 'GET_STORY_META';

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getStoryMeta = (storyId) => {
  return (dispatch, getState) => {
    return request
      .get('/story/' + storyId)
      .end((err, res) => {
        dispatch({
          type: GET_STORY_META,
          // TODO: NULL CHECK
          story: JSON.parse(res.text),
        });
      });
  }
}

export const actions = {
  getStoryMeta,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_STORY_META]: (state, action) => {
    return Object.assign({}, state, action.story);
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function storyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
