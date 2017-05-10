import React, { PropTypes, Component } from 'react'
import Square from './Square'
import GameResult from './GameResult'
import Errors from './Errors'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Tictactoe extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    gameId: PropTypes.number.isRequired,
    board: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired,
    errors: PropTypes.array.isRequired,
    gameResult: PropTypes.string
  }

  constructor() {
    super()
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  handleSquareClick(squareIndex) {
    const { gameId, socket } = this.props

    socket.emit('makeMove', { gameId: gameId, squareIndex: squareIndex })
  }

  render() {
    const { status, board, gameResult, errors } = this.props

    const squares = board.map((symbol, index) =>
      <Square
        key={index}
        index={index}
        symbol={symbol}
        onClick={this.handleSquareClick}
      />
    )

    return <div>
      {errors ? <Errors errors={errors} /> : null}
      <CSSTransitionGroup
        transitionName='ttt'
        transitionAppear
        transitionAppearTimeout={500}
        transitionLeave={false}
        transitionEnterTimeout={500}>
        <h3 key={status}>{status}</h3>
        <div className='board'>
          {squares}
          {gameResult ? <GameResult gameResult={gameResult} /> : null}
        </div>
      </CSSTransitionGroup>
    </div>
  }
}
