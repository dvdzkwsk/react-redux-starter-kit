import React from 'react'

export const Pagination = (props) => (
  <nav style={{ textAlign: 'center'}}>
    <ul className='pagination'>
      <li
        style={{ display: props.page > 1 ? 'initial' : 'none' }}
        onClick={() => {
          props.decrementPage()
          props.fetchRules()
        }}
      >
        <span aria-hidden="true">&laquo;</span>
      </li>
      <li>
        <span aria-hidden="true">{props.page}</span>
      </li>
      <li
        onClick={() => {
          props.incrementPage()
          props.fetchRules()
        }}
      >
        <span aria-hidden="true">&raquo;</span>
      </li>
    </ul>
  </nav>
)

Pagination.propTypes = {
  page: React.PropTypes.number.isRequired,
  incrementPage: React.PropTypes.func.isRequired,
  decrementPage: React.PropTypes.func.isRequired,
  fetchRules: React.PropTypes.func.isRequired
}

export default Pagination
