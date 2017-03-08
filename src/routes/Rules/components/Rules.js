import React from 'react'
import RuleDescriptionContainer from '../containers/RuleDescriptionContainer'

export const Rules = ({
  rules
}) => (
  <table className='table table-hover'>
    <tbody>
      {
        rules.map(rule => (
          <RuleDescriptionContainer key={rule} id={rule} />
        ))
      }
    </tbody>
  </table>
)

Rules.propTypes = {
  rules: React.PropTypes.array.isRequired
}

export default Rules
