import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export const Answers = (props) => {

  if (props.answer) {
    return (
      <div className="answers">
          {
            props.answer.map(function (item, index) {
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

  } else {
    return null
  }
}

export default Answers
