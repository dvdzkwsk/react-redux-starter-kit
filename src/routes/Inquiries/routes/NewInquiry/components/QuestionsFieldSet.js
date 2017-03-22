import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export class QuestionsFieldSet extends React.Component {

  render () {
    if (this.props.questions.isEmpty()) {
      return null
    } else {
      return (
        <fieldset className='form-group questions'>
          <legend>Questions</legend>
          <div className="form">
            {
              this.props.questions.map(function (question, index) {
                var input

                switch (question.get('display_type')) {
                  case 'string':
                    input = <input type='text' name="answers_attributes[{index}][value]" />
                    break;
                  case 'textarea':
                    input = <textarea name="answers_attributes[{index}][value]" />
                    break;
                  case 'number':
                    input = <input type='number' name="answers_attributes[{index}][value]" placeholder={question.get('placeholder')} />
                    break;
                  case 'radio':
                    input = question.get('choices').map((choice, index) => {
                      return (
                        <span className="radio" key={index}>
                          <label>
                            <input type='radio' name="answers_attributes[{index}][choice_id]" value={choice.get('id')} />
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
                            <input type='checkbox' name="answers_attributes[{index}][choice_ids]" value={choice.get('id')} />
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
                    <input type="hidden" name="answers_attributes[{index}][question_id]" value="{question.get('id')}" />
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
}

export default QuestionsFieldSet
