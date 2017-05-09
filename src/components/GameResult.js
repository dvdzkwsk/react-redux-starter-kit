import React, { PropTypes, Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class GameResult extends Component {
  static propTypes = {
    gameResult: PropTypes.string.isRequired
  }

  render() {
    const { gameResult } = this.props
    let result

    switch (gameResult) {
      case 'x':
        result = 'Победил игрок "X"'
        break
      case 'o':
        result = 'Победил игрок "O"'
        break
      case 'full':
        result = 'Ничья'
        break
      case 'disconnect':
        result = 'Соединение потеряно'
        break
      default:
        result = 'Не удалось определить победителя'
        break
    }

    return <CSSTransitionGroup
      transitionName='ttt'
      transitionAppear
      transitionAppearTimeout={500}
      transitionLeave={false}
      transitionEnterTimeout={500}>
      <div className='result'><h4>{result}</h4></div>
    </CSSTransitionGroup>
  }
}
