import { MESSAGE_SEND, MESSAGE_NEW } from '../constants/chat'

export function sendMessage(text, status) {
  const message = { user: 'you', text: text, status: status }

  return {
    type: MESSAGE_SEND,
    message
  }
}
export function newMessage(text) {
  const message = { user: 'opponent', text: text }
  return {
    type: MESSAGE_NEW,
    message
  }
}
