import { SET_INVITE_LINK, SET_CONNECTION_ERROR } from '../constants/welcome'

export function getInviteLink(link) {
  return {
    type: SET_INVITE_LINK,
    link
  }
}

export function setConnectionError(error) {
  return {
    type: SET_CONNECTION_ERROR,
    error
  }
}
