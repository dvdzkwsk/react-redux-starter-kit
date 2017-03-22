import React from 'react'
import S from 'string'
import './StateTag.scss'

export class StateTag extends React.Component {
  render () {
    return (
      <span className={['label', this.props.value].join(' ')}>{S(this.props.value).humanize().titleCase().s}</span>
    )
  }
}

StateTag.defaultProps = {
  value: true
}

export default StateTag
