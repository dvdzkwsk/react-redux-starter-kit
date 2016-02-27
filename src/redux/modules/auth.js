import axios from 'axios';

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------
export const login = ({ email, password }) => {
  return (dispatch) => {
    return axios.post('/auth/local', {
      email, password
    }).then(({ data }) => {
      dispatch(loginSuccess(data));
    });
  };
};

export const signup = ({ name, email, password }) => {
  return (dispatch, getState) => {
    return axios.post('/api/users', { 
      name, email, password
    }).then(({ data }) => {
      dispatch(signupSuccess(data));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return axios.delete(`/api/things/${_id}`)
      .then((res) => {
        dispatch(logoutSuccess(_id));
      });
  };
};

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const signupSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  payload: token
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const actions = {
  login,
  loginSuccess,
  signup,
  signupSuccess,
  logout,
  logoutSuccess
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_SUCCESS] (state, { payload: things }) {
    return things;
  },

  [SIGNUP_SUCCESS] (things, { payload: thing }) {
    return [...things, thing];
  },

  [LOGOUT_SUCCESS] (things, { payload: _id }) {
    const index = _.findIndex(things, (thing) => thing._id === _id);

    return [
      ...things.slice(0, index),
      ...things.slice(index + 1)
    ];
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];
export default function thingReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
