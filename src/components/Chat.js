import React, { PropTypes, Component } from 'react'

export default class Chat extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
    gameId: PropTypes.number.isRequired,
    socket: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.handleSendClick = this.handleSendClick.bind(this)
    this.handleSendKeyPress = this.handleSendKeyPress.bind(this)
  }

  componentDidMount() {
    const { socket, newMessage } = this.props

    // Пользователь получает новое сообщение
    socket.on('newMessage', data => {
      newMessage(data.text)
    })
  }

  /**
   * Отправляет сообщение в чат
   */
  handleSendClick() {
    const { socket, gameId, sendMessage } = this.props
    const inputText = this.refs.inputText.value.trim()

    if (inputText) {
      this.refs.inputText.value = ''
      socket.emit('sendMessage', { gameId: gameId, text: inputText }, status => {
        sendMessage(inputText, status)
      })
    }
  }
  handleSendKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSendClick()
    }
  }
  render() {
    const { messages } = this.props

    // Формируем сообщения чата
    const chatMessages = messages.map((message, index) => {
      let icon = ''
      switch (message.status) {
        case 'ok':
          icon = <span className='glyphicon glyphicon-ok' />
          break
        case 'fail':
          icon = <span className='glyphicon glyphicon-remove' />
          break
      }

      return <div key={index} className='msg'>
        <span className='user'>{message.user}</span>
        {': '}
        <span className='text'>{message.text}</span>
        {'  '}{icon}
      </div>
    })

    return <div className='chat col-md-12'>
      <div className='input-group'>
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={this.handleSendClick}>Отправить</button>
        </span>
        <input
          type='text'
          ref='inputText'
          className='form-control'
          onKeyPress={this.handleSendKeyPress}
          placeholder='Напишите сообщение...'
        />
      </div>
      {(chatMessages.length > 0) ? <div className='messages'>{chatMessages}</div> : ''}
    </div>
  }
}
