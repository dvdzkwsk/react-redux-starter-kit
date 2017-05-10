import { MESSAGE_SEND, MESSAGE_NEW } from '../constants/chat'

const initialState = {
  user: 'error',
  messages: []
}

export default function chat(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SEND:
      return { ...state, messages: [action.message, ...state.messages] }
    case MESSAGE_NEW:
      return { ...state, messages: [action.message, ...state.messages] }
    default:
      return state
  }
}
