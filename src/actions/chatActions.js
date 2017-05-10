import { MESSAGE_SEND_REQUEST } from '../constants/chat'

export function sendMessage(user, text) {
  const message = { user: user, text: text, status: 'wait' }
  return {
    type: MESSAGE_SEND_REQUEST,
    message
  }
}
