import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            <img className={classes.duck}
                 src={DuckImage}
                 alt='This is a duck, because Redux.' />
          </div>
        </div>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className={classes['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/404'>Go to 404 Page</Link>
      </div>
    )
  }
}

// Export component class for testing.
export { HomeView }
// The syntax above is optional but required to support
// the pure class -> function component transform in production.
// Named export class declarations are not supported yet
// but will be soon. In the meantime, export class declarations
// as an object map ie: export { FooClass, BarClass }.
// Since only pure component classes can be transformed, you
// can use standard named exports `export class X` syntax...
// ie. for components with lifecycle methods

export default connect(mapStateToProps, counterActions)(HomeView)
