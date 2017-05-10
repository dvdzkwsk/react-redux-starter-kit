import { GAME_OVER, GAME_STARTED, UPDATE_BOARD, UPDATE_STATUS, SHOW_ERROR, DELETE_ERROR } from '../constants/tictactoe'

let uniqueErrorId = 0

export function gameStarted(gameId, board) {
  return {
    type: GAME_STARTED,
    gameId,
    board
  }
}
export function gameOver(status, gameResult) {
  return {
    type: GAME_OVER,
    gameResult,
    status
  }
}
export function updateBoard(board, gameResult) {
  return {
    type: UPDATE_BOARD,
    board,
    gameResult
  }
}
export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status
  }
}
export function showError(text) {
  return (dispatch) => {
    const id = uniqueErrorId++

    const error = { id: id, text: text }
    dispatch({
      type: SHOW_ERROR,
      error
    })

    setTimeout(() => {
      dispatch({
        type: DELETE_ERROR,
        id: id
      })
    }, 2000)
  }
}
