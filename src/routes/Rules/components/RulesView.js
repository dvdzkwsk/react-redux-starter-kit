import React from 'react'
import NavigationContainer from '../containers/NavigationContainer'
import PaginationContainer from '../containers/PaginationContainer'
import RulesContainer from '../containers/RulesContainer'

export const RulesView = () => (
  <div>
    <NavigationContainer />
    <PaginationContainer />
    <RulesContainer />
    <PaginationContainer />
  </div>
)

export default RulesView
