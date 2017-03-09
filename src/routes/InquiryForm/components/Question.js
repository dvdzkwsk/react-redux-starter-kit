import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
// import './Questions.scss'

export const Question = (props) => {
  var input

  switch (props.question.get('display_type')) {
    case 'string':
      input = <input type='text' />
      break;
    case 'textarea':
      input = <textarea />
      break;
    case 'number':
      input = <input type='number' placeholder={props.question.get('placeholder')} />
      break;
    case 'radio':
      input = props.question.get('choices').map((choice, index) => {
        return (
          <label key={index}>
            <input type='radio' value={choice.get('id')} />
            {choice.get('value')}
          </label>
        )
      })
      break;
    case 'checkboxes':
      input = props.question.get('choices').map((choice, index) => {
        return (
          <label key={index}>
            <input type='checkbox' value={choice.get('id')} />
            {choice.get('value')}
          </label>
        )
      })
      break;
    case 'select':
      input = (
        <select>
          {
            props.question.get('choices').map((choice, index) => {
              return (
                <option key={index} value={choice.get('id')}>
                  {choice.get('value')}
                </option>
              )
            })
          }
        </select>
      )
      break;
  }

  return (
    <div>
      <label>{props.question.get('name')}</label>
      {input}
    </div>
  )
}

export default Question
