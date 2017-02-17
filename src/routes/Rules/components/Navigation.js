import React from 'react'
import PaginationContainer from '../containers/PaginationContainer'
import RuleDescriptionContainer from '../containers/RuleDescriptionContainer'

export const Navigation = ({
  search,
  updateSearch,
  page,
  updatePage,
  perpage,
  updatePerPage,
  rules,
  fetchRules
}) => (
  <div style={{ margin: '0 auto' }} >
    <form className='form-inline' onSubmit={e => {
      e.preventDefault()
      fetchRules()
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
          value={search}
          type='search'
          onChange={e => {
            updateSearch(e.target.value)
          }}
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
          value={page}
          type='number'
          min='1'
          onChange={e => {
            updatePage(Number(e.target.value))
          }}
        />
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
          value={perpage}
          type='number'
          min='1'
          onChange={e => {
            updatePerPage(Number(e.target.value))
          }}
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
    <ul className='list-group'>
      {
        rules.map(rule => (
          <RuleDescriptionContainer key={rule} id={rule} />
        ))
      }
    </ul>
    <PaginationContainer />
  </div>
)

Navigation.propTypes = {
  search: React.PropTypes.string,
  page: React.PropTypes.number.isRequired,
  perpage: React.PropTypes.number.isRequired,
  rules: React.PropTypes.array.isRequired,
  fetchRules: React.PropTypes.func.isRequired
}

export default Navigation
