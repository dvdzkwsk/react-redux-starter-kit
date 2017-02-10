import React from 'react'
import { Link } from 'react-router'

export const Rules = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Rules</h2>
    <input
      value={props.search}
      type='text'
      min='1'
      onChange={e => {
        props.updateSearch(e.target.value)
      }}
    />
    <input
      value={props.page}
      type='number'
      min='1'
      onChange={e => {
        props.updatePage(Number(e.target.value))
      }}
    />
    <select
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
    <button className='btn btn-default' onClick={props.fetchRules}>
      Fetch
    </button>
    <button className='btn btn-default'
      style={{display: props.page > 1 ? 'initial' : 'none'}}
      onClick={() => {
        props.decrementPage()
        props.fetchRules()
    }}>
      Previous
    </button>
    <button className='btn btn-default' onClick={() => {
      props.incrementPage()
      props.fetchRules()
    }}>
      Next
    </button>
    {
      props.rules.map((rule, i) => (
        <li key={i}><Link to={`rule/${rule.id}`}>{rule.description}</Link></li>
      ))
    }
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
