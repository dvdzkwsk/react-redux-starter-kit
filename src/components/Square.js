import React, { PropTypes, Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Square extends Component {
  static propTypes = {
    symbol: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.index)
  }

  render() {
    const { symbol } = this.props

    return <div className='square noselect' >
      <div className='content' onClick={this.handleClick}>
        <CSSTransitionGroup
          transitionName='turn'
          transitionAppearTimeout={200}
          transitionLeave={false}
          transitionEnterTimeout={200}>
          <div key={symbol} className='symbol'>{symbol}</div>
        </CSSTransitionGroup>
      </div>
    </div >
  }
}
