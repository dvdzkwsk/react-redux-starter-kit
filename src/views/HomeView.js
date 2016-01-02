import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
import styles from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})

// React components can now be defined as pure functions
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
function HomeView ({ counter, doubleAsync, increment }) {
  return (
    <div className='container text-center'>
      <h1>Welcome to the React Redux Starter Kit</h1>
      <h2>
        Sample Counter:&nbsp;
        <span className={styles['counter--green']}>{counter}</span>
      </h2>
      <button className='btn btn-default'
              onClick={() => increment(1)}>
        Increment
      </button>
      <button className='btn btn-default'
              onClick={doubleAsync}>
        Double (Async)
      </button>
      <hr />
      <Link to='/about'>Go To About View</Link>
    </div>
  )
}
HomeView.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

// Note: Stateless/function components *will not* yet hot reload!
// react-transform *only* works on component classes.
// https://github.com/gaearon/babel-plugin-react-transform/issues/57
//
// Since connected components don't need additional props, they can easily
// be wrapped to support hot reloading.
// Once the babel-plugin-react-transform issue has been resolved this class
// maybe removed and the following used instead:
//
// export default connect(mapStateToProps, counterActions)(HomeView)
//
export default class Connector extends React.Component {
  render () {
    let Component = connect(mapStateToProps, counterActions)(HomeView)
    return (<Component/>)
  }
}
