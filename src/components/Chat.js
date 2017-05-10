import React, { PropTypes, Component } from 'react'

export default class Chat extends Component {
  static propTypes = {
    messages: PropTypes.array,
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
  }

  constructor() {
    super()
    this.handleSendClick = this.handleSendClick.bind(this)
  }

  /**
   * Отправляет сообщение в чат
   */
  handleSendClick() {
    const inputText = this.refs.inputText.value.trim()

    if (inputText) {
      this.refs.inputText.value = ''

      console.log(this.props)
      this.props.sendMessage(this.props.user, inputText)
    }
  }

  render() {
    const { messages } = this.props

    const chatMessages = messages.map((message, index) =>
      <div key={index} className='msg'>
        <span className='user'>{message.user}</span>
        {': '}
        <span className='text'>{message.text}</span>
        <span className='status'>{`(${message.status})`}</span>
      </div>
    )

    return <div className='chat col-md-12'>
      <div className='input-group'>
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={this.handleSendClick}>Отправить</button>
        </span>
        <input type='text' ref='inputText' className='form-control' placeholder='Напишите сообщение...' />
      </div>
      <div className='messages'>{chatMessages}</div>
    </div>
  }
}
