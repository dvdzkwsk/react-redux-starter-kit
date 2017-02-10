import React from 'react'
import { Link } from 'react-router'

export const Rules = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Rules: {props.rules.length}</h2>
    <input
      value={props.search}
      type="text"
      min="1"
      onChange={e => {
        props.updateSearch(e.target.value)
      }}
    />
    <input
      value={props.page}
      type="number"
      min="1"
      onChange={e => {
        props.updatePage(Number(e.target.value))
      }}
    />
    <input
      value={props.perpage}
      type="number"
      min="1"
      onChange={e => {
        props.updatePerPage(Number(e.target.value))
      }}
    />
    <button className='btn btn-default' onClick={props.fetchRules}>
      Fetch
    </button>
    {
      props.rules.map(rule => (
        <li><Link to={`./${rule.id}`}>{rule.description}</Link></li>
      ))
    }
  </div>
)

Rules.propTypes = {
  rules     : React.PropTypes.array.isRequired,
  fetchRules : React.PropTypes.func.isRequired
}

export default Rules
