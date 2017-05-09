import { SET_TICTACTOE_COMPONENT } from '../constants/app'

const initialState = {
  currentComponent: 'welcome'
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_TICTACTOE_COMPONENT:
      return { ...state, currentComponent: action.currentComponent }
    default:
      return state
  }
}
