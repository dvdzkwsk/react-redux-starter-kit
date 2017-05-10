import { MESSAGE_SEND_REQUEST } from '../constants/chat'

const initialState = {
  user: 'error',
  messages: [{ user: 'X', text: 'hello O', status: 'sent' }, { user: 'O', text: 'hello X', status: 'sent' }]
}

export default function chat(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SEND_REQUEST:
      return { ...state, messages: [action.message, ...state.messages] }
    default:
      return state
  }
}
