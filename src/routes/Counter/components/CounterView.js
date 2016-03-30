import React from 'react'
import Helmet from 'react-helmet'
import CounterContainer from '../containers/CounterContainer'

/*  Entry point for Counter route - useful for setting up layout,
    document title (see below) as well as rendering named components
    Can be removed, and route can render container directly.*/

const CounterView = (props) => (
  <div>
    <Helmet title='Counter' />
    <CounterContainer {...props}/>
  </div>
)

/*  Note: Since this is a 'top level' route, we are passing the `props`
    object to the container component, which incudes some useful helpers
    provided by `react-router`, ie `params` and `route` which can then
    be accessed using the second param of mapStateToProps(state, *ownProps*)

    In this starter-kit, we are not using this functionality, but it is
    a good thing to keep in mind.   */

export default CounterView
