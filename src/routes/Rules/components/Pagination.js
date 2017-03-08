import React from 'react'
import { Link } from 'react-router'
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
            key={pageNumber}
            className={page === pageNumber && 'active'}
          >
            <Link to={{
              pathname: 'rules',
              query: {
                page: pageNumber,
                perpage,
                search
              }
            }} aria-hidden='true'>
              {pageNumber}
            </Link>
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
  maxpage: React.PropTypes.number,
  fetchRules: React.PropTypes.func.isRequired
}

export default Pagination
