import React from 'react'
import { Link } from 'react-router'

export const SubmitButton = ({
  search,
  page,
  perpage
}) => (
  <Link to={{
    pathname: 'rules',
    query: {
      page: page,
      perpage: perpage,
      search: search
    }
  }}
    className='btn btn-primary'
    role='button'>
    Submit
  </Link>
)

SubmitButton.propTypes = {
  search: React.PropTypes.string,
  page: React.PropTypes.number,
  perpage: React.PropTypes.number
}

export default SubmitButton
