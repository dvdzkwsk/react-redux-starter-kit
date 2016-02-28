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
    }).then(({ data: { token }}) => {
      localStorage.setItem('token', token);
      dispatch(loginSuccess());
    });
  };
};

export const signup = ({ name, email, password }) => {
  return (dispatch, getState) => {
    return axios.post('/api/users', {
      name, email, password
    }).then(({ data: { token }}) => {
      localStorage.setItem('token', token);
      dispatch(signupSuccess(data));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
  };
};

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: true
});

export const signupSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  payload: true
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: false
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
  [LOGIN_SUCCESS] (state, { payload: isAuthenticated }) {
    return isAuthenticated;
  },

  [SIGNUP_SUCCESS] (state, { payload: isAuthenticated }) {
    return isAuthenticated;
  },

  [LOGOUT_SUCCESS] (state, { payload: isAuthenticated }) {
    return isAuthenticated;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false;
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
