import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import { isEmpty } from 'lodash'

export const QuestionsFieldSet = (props) => {

  if (props.questions.isEmpty()) {
    return null
  } else {
    return (
      <fieldset className='form-group questions'>
        <legend>Questions</legend>
        <div className="form">
          {
            props.questions.map(function (question, index) {
              var input

              switch (question.get('display_type')) {
                case 'string':
                  input = <input type='text' />
                  break;
                case 'textarea':
                  input = <textarea />
                  break;
                case 'number':
                  input = <input type='number' placeholder={question.get('placeholder')} />
                  break;
                case 'radio':
                  input = question.get('choices').map((choice, index) => {
                    return (
                      <span className="radio" key={index}>
                        <label>
                          <input type='radio' name={question.get('name')} value={choice.get('id')} />
                          {choice.get('value')}
                        </label>
                      </span>
                    )
                  })
                  break;
                case 'checkboxes':
                  input = question.get('choices').map((choice, index) => {
                    return (
                      <span className="checkboxes" key={index}>
                        <label>
                          <input type='checkbox' value={choice.get('id')} />
                          {choice.get('value')}
                        </label>
                      </span>
                    )
                  })
                  break;
                case 'select':
                  input = (
                    <select>
                      {
                        question.get('choices').map((choice, index) => {
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
                <div key={index}>
                  <label>{question.get('name')}</label>
                  {input}
                </div>
              )
            })
          }
        </div>
      </fieldset>
    )
  }
}

export default QuestionsFieldSet
