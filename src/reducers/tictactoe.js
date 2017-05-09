import { GAME_OVER, GAME_STARTED, UPDATE_BOARD, UPDATE_STATUS, SHOW_ERROR, DELETE_ERROR } from '../constants/tictactoe'

const initialState = {
  board: [],
  status: '',
  gameId: -1,
  gameResult: null,
  errors: []
}

export default function tictactoe(state = initialState, action) {
  switch (action.type) {
    case GAME_OVER:
      return { ...state, gameResult: action.gameResult, status: action.status }
    case GAME_STARTED:
      return { ...state, board: action.board, gameId: action.gameId }
    case UPDATE_BOARD:
      return { ...state, board: action.board, gameResult: action.gameResult }
    case UPDATE_STATUS:
      return { ...state, status: action.status }
    case SHOW_ERROR:
      return { ...state, errors: [...state.errors, action.error] }
    case DELETE_ERROR:
      return { ...state, errors: state.errors.filter(err => err.id !== action.id) }
    default:
      return state
  }
}
