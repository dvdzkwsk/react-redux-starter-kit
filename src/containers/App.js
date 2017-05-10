import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import io from 'socket.io-client'
import url from 'url'

import '../styles/tictactoe.scss'
import soundManager from '../sounds'

// Components
import Welcome from '../components/Welcome'
import Tictactoe from '../components/Tictactoe'
import Chat from '../components/Chat'

// Actions
import * as appActions from '../actions/appActions'
import * as welcomeActions from '../actions/welcomeActions'
import * as tictactoeActions from '../actions/tictactoeActions'
import * as chatActions from '../actions/chatActions'

const socket = io()

class App extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    appActions: PropTypes.object.isRequired,
    welcome: PropTypes.object.isRequired,
    welcomeActions: PropTypes.object.isRequired,
    tictactoe: PropTypes.object.isRequired,
    tictactoeActions: PropTypes.object.isRequired,
    chat: PropTypes.object.isRequired,
    chatActions: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { setTictactoeComponent } = this.props.appActions
    const { gameOver, gameStarted, updateBoard, showError, updateStatus } = this.props.tictactoeActions
    const { getInviteLink, setConnectionError } = this.props.welcomeActions

    // Получаем gameId из url
    const query = url.parse(window.location.href, true).query

    // Подключаемся к игре, если gameId найден в URL
    // Создаем новую, если gameId не найден
    if (query.gameId) {
      const gameId = parseInt(query.gameId)

      socket.emit('joinGame', { gameId: gameId })
    } else {
      socket.emit('createNewGame')
    }

    // Новая игра создана
    socket.on('newGameCreated', data => {
      getInviteLink(data.inviteLink)
    })
    // Запуск игры
    socket.on('gameStarted', data => {
      gameStarted(data.gameId, data.board)
      setTictactoeComponent()
    })
    // Завершение игры
    socket.on('gameOver', data => {
      gameOver(data.status, data.gameResult)
    })
    // Обновление доски после сделанного хода
    socket.on('moveIsMade', data => {
      updateBoard(data.board, data.gameResult)
    })
    // Обновляет поле status в компоненте Tictactoe
    // Проигрываем звуки, если указан файл
    socket.on('updateStatus', data => {
      updateStatus(data.status)
      if (data.soundAlert !== undefined) {
        soundManager.play(data.soundAlert)
      }
    })
    // Ошибка подключения к игровой сессии
    // Появляется, когда второй игрок не может подключиться
    socket.on('connectionError', data => {
      setConnectionError(data.error)
    })
    // Сообщение об ошибке
    socket.on('error', data => {
      showError(data.error)
    })
  }

  render() {
    const { currentComponent } = this.props.app
    const { inviteLink, connectionError } = this.props.welcome
    const { status, board, gameId, gameResult, errors } = this.props.tictactoe
    const { messages, user } = this.props.chat
    const { sendMessage, newMessage } = this.props.chatActions

    // До начала игры показываем компонент welcome
    if (currentComponent === 'welcome') {
      return <Welcome
        inviteLink={inviteLink}
        connectionError={connectionError}
      />
    } else if (currentComponent === 'tictactoe') {
      return <div>
        <Tictactoe
          status={status}
          board={board}
          socket={socket}
          gameId={gameId}
          gameResult={gameResult}
          errors={errors}
        />
        <Chat
          messages={messages}
          sendMessage={sendMessage}
          newMessage={newMessage}
          socket={socket}
          gameId={gameId}
          user={user}
        />
      </div>
    }
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    welcome: state.welcome,
    tictactoe: state.tictactoe,
    chat: state.chat
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    welcomeActions: bindActionCreators(welcomeActions, dispatch),
    tictactoeActions: bindActionCreators(tictactoeActions, dispatch),
    chatActions: bindActionCreators(chatActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
