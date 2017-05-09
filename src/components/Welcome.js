import React, { PropTypes, Component } from 'react'

export default class Welcome extends Component {
  static propTypes = {
    connectionError: PropTypes.string,
    inviteLink: PropTypes.string
  }

  render() {
    let { inviteLink, connectionError } = this.props

    if (inviteLink) {
      return <div><h3>Ожидаем второго игрока</h3>
        <div className='col-sm-12'>Инвайт ссылка: <span className='invite'>{inviteLink}</span></div>

      </div>
    } else if (connectionError) {
      return <div><h3>{connectionError}</h3></div>
    } else {
      return <div />
    }
  }
}
