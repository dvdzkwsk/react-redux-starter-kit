import Promise from 'bluebird';
import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_STORY_META = 'GET_STORY_META';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';

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
        if (!err) {
          dispatch({
            type: GET_STORY_META,
            // TODO: NULL CHECK
            storyMeta: JSON.parse(res.text),
          });
        }
      });
  };
};

export const addComment = (
  params = {
    storyId,
    replyToId,
    text,
    jwt,
  }
) => {
  return (dispatch, getState) => {
    return request
      .post('/comment/')
      .send(params)
      .end((err, res) => {
        if (!err) {
          dispatch({
            type: ADD_COMMENT,
            comment: JSON.parse(res.text),
          });
        }
      });
  };
};

export const getComments = (storyId) => {
  return (dispatch, getState) => {
    return request
      .get('/comment/' + storyId)
      .end((err, res) => {
        if (!err) {
          dispatch({
            type: GET_COMMENTS,
            comments: JSON.parse(res.text),
          });
        }
      });
  }
}

export const actions = {
  getStoryMeta,
  addComment,
  getComments,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_STORY_META]: (state, action) => {
    return {
      ...state,
      storyMeta: {
        ...action.storyMeta
      }
    };
  },
  [ADD_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: state.comments.concat({
        ...action.comment
      })
    };
  },
  [GET_COMMENTS]: (state, action) => {
    return {
      ...state,
      comments: [
        ...action.comments,
      ]
    };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  story: {
    storyMeta: undefined,
    comments: [],
  },
};
export default function storyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
