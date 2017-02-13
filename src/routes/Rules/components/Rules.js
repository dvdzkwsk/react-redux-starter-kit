import React from 'react'
import RuleDescriptionContainer from '../containers/RuleDescriptionContainer'

export const Rules = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Rules</h2>
    <form className='form-inline' onSubmit={e => {
      e.preventDefault()
      props.fetchRules()
    }}>
      <div className='form-group'>
        <div className='input-group'>
          <input
            className='form-control'
            value={props.search}
            type='text'
            min='1'
            onChange={e => {
              props.updateSearch(e.target.value)
            }}
          />
          <div className='input-group-addon glyphicon glyphicon-search' />
        </div>
      </div>
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='page-input'
        >
          Page:
        </label>
        <input
          id='page-input'
          className='form-control'
          value={props.page}
          type='number'
          min='1'
          onChange={e => {
            props.updatePage(Number(e.target.value))
          }}
        />
      </div>
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='per-page-input'
        >
          Per Page:
        </label>
        <select
          id='per-page-input'
          className='form-control'
          value={props.perpage}
          type='number'
          min='1'
          onChange={e => {
            props.updatePerPage(Number(e.target.value))
          }}
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <button className='btn btn-primary' type='submit' >
        Submit
      </button>
      <button className='btn btn-default'
        style={{ display: props.page > 1 ? 'initial' : 'none' }}
        onClick={() => {
          props.decrementPage()
          props.fetchRules()
        }}>
        <div className='glyphicon glyphicon-chevron-left' />
      </button>
      <button className='btn btn-default' onClick={() => {
        props.incrementPage()
        props.fetchRules()
      }}>
        <div className='glyphicon glyphicon-chevron-right' />
      </button>
    </form>
    <ul className='list-unstyled'>
      {
        props.rules.map(rule => (
          <RuleDescriptionContainer key={rule} id={rule} />
        ))
      }
    </ul>
  </div>
)

Rules.propTypes = {
  search: React.PropTypes.string,
  page: React.PropTypes.number.isRequired,
  perpage: React.PropTypes.number.isRequired,
  rules: React.PropTypes.array.isRequired,
  fetchRules: React.PropTypes.func.isRequired
}

export default Rules
