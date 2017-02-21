import React from 'react'
import PaginationContainer from '../containers/PaginationContainer'
import RuleDescriptionContainer from '../containers/RuleDescriptionContainer'
import './Navigation.scss'

export const Navigation = ({
  search,
  page = 1,
  perpage = 20,
  maxpage,
  rules,
  fetchRules
}) => (
  <div className='navigation'>
    <form className='form-inline' onSubmit={e => {
      e.preventDefault()

      const search = document.getElementById('search-input').value
      const page = Number(document.getElementById('page-input').value)
      const perpage = Number(document.getElementById('per-page-input').value)

      fetchRules({search, page, perpage})
    }}>
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='search-input'
        >
          Search
        </label>
        <input
          id='search-input'
          className='form-control'
          defaultValue={search || ''}
          type='search'
        />
      </div>
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='page-input'
        >
          Page
        </label>
        <input
          id='page-input'
          className='form-control'
          defaultValue={page || 1}
          type='number'
          min='1'
        />
        <span> of {maxpage} </span>
      </div>
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='per-page-input'
        >
          Per Page
        </label>
        <select
          id='per-page-input'
          className='form-control'
          defaultValue={perpage || 20}
          type='number'
          min='1'
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className='form-group'>
        <button className='btn btn-primary' type='submit' >
          Submit
        </button>
      </div>
    </form>
    <PaginationContainer />
    <table className='table table-hover'>
      <tbody>
        {
          rules.map(rule => (
            <RuleDescriptionContainer key={rule} id={rule} />
          ))
        }
      </tbody>
    </table>
    <PaginationContainer />
  </div>
)

Navigation.propTypes = {
  search: React.PropTypes.string,
  page: React.PropTypes.number.isRequired,
  perpage: React.PropTypes.number.isRequired,
  maxPage: React.PropTypes.number.isRequired,
  rules: React.PropTypes.array.isRequired,
  fetchRules: React.PropTypes.func.isRequired
}

export default Navigation
