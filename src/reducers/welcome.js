import { SET_INVITE_LINK, SET_CONNECTION_ERROR } from '../constants/welcome'

const initialState = {
  inviteLink: '',
  connectionError: ''
}

export default function welcome(state = initialState, action) {
  switch (action.type) {
    case SET_INVITE_LINK:
      return { ...state, inviteLink: action.link }
    case SET_CONNECTION_ERROR:
      return { ...state, connectionError: action.error }
    default:
      return state
  }
}
