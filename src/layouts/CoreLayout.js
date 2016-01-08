import { App } from 'react-toolbox'
import { Grid } from 'react-flexbox-grid'
import '../styles/core.scss'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  return (
    <App>
      <Grid fluid>
        {children}
      </Grid>
    </App>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
}

export default CoreLayout
