import { SET_TICTACTOE_COMPONENT } from '../constants/app'

export function setTictactoeComponent() {
  return {
    type: SET_TICTACTOE_COMPONENT,
    currentComponent: 'tictactoe'
  }
}
