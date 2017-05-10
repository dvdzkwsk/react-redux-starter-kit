import React, { PropTypes, Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Errors extends Component {
  static propTypes = {
    errors: PropTypes.array
  }

  render() {
    const { errors } = this.props

    // отображаем последние 4 ошибки
    const errorList = errors.map((error, index) => {
      if (index > errors.length - 5) {
        return <div key={error.id} className='err'>{error.text}</div>
      }
    }
    )

    return <div className='errors'><CSSTransitionGroup
      transitionName='errors'
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      {errorList}
    </CSSTransitionGroup>
    </div>
  }
}
