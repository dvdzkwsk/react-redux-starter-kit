import React from 'react'

export const Pagination = ({
  page,
  decrementPage,
  incrementPage,
  fetchRules
}) => (
  <nav style={{ textAlign: 'center' }}>
    <ul className='pagination'>
      <li
        style={{ display: page > 1 ? 'initial' : 'none' }}
        onClick={() => {
          decrementPage()
          fetchRules()
        }}
      >
        <span aria-hidden='true'>&laquo;</span>
      </li>
      <li>
        <span aria-hidden='true'>{page}</span>
      </li>
      <li
        onClick={() => {
          incrementPage()
          fetchRules()
        }}
      >
        <span aria-hidden='true'>&raquo;</span>
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
