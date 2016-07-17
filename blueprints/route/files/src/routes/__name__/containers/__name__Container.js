import { connect } from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import <%= pascalEntityName %> from '../components/<%= pascalEntityName %>'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */
/*
import { increment, doubleAsync } from '../modules/<%= pascalEntityName %>'
const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

- OR - just refer to the actions objects:
*/
import { actions as mapDispatchToProps} from '../modules/<%= pascalEntityName %>'

const mapStateToProps = (state) => ({
  counter: state.counter
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(<%= pascalEntityName %>)
