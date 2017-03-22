import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export class Answers extends React.Component {
  render () {
    if (this.props.answer == null || this.props.answer.isEmpty()) {
      return null
    }
    else {
      return (
        <div className="answers">
            {
              this.props.answer.map(function (item, index) {
                return (
                  <div className="answer-group" key={index}>
                    <p className="question">{item.get('question').get('name')} ?</p>
                    <p className="answer">{item.get('display_value')}</p>
                  </div>
                )
              })
            }
        </div>
      )
    }
  }
}

export default Answers
