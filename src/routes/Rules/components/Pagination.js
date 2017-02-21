import React from 'react'
import './Pagination.scss'

export const Pagination = ({
  search,
  page,
  perpage,
  maxpage,
  fetchRules
}) => (
  <nav style={{ textAlign: 'center' }}>
    <ul className='pagination'>
      <li
        className={page <= 1 && 'hidden'}
        onClick={() => {
          fetchRules({
            page: Math.max(page - 1, 1),
            perpage,
            search
          })
        }}
      >
        <span aria-hidden='true'>&laquo;</span>
      </li>
      {
        getPagination(page, maxpage).map(pageNumber => (
          <li
            className={page === pageNumber && 'active'}
            onClick={() => fetchRules({
              search,
              page: pageNumber,
              perpage
            })
          }>
            <span aria-hidden='true'>
              {pageNumber}
            </span>
          </li>
        ))
      }
      <li
        className={page >= maxpage && 'hidden'}
        onClick={() => {
          fetchRules({
            page: Math.min(page + 1, maxpage),
            perpage,
            search
          })
        }}
      >
        <span aria-hidden='true'>&raquo;</span>
      </li>
    </ul>
  </nav>
)

function getPagination (page, maxPage) {
  const min = Math.max(page - 2, 1)
  const max = Math.min(min + 4, maxPage)
  const pages = []
  let value = min

  while (value <= max) {
    pages.push(value)
    value++
  }

  return pages
}

Pagination.propTypes = {
  search: React.PropTypes.string,
  page: React.PropTypes.number.isRequired,
  perpage: React.PropTypes.number.isRequired,
  maxpage: React.PropTypes.number.isRequired,
  fetchRules: React.PropTypes.func.isRequired
}

export default Pagination
