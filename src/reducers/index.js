import { combineReducers } from 'redux'
import tictactoe from './tictactoe'
import welcome from './welcome'
import app from './app'
import chat from './chat'

export default combineReducers({
  tictactoe,
  welcome,
  app,
  chat
})
