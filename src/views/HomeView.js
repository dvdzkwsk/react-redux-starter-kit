import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import { Link }               from 'react-router';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={this.props.increment}>
          Increment
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(HomeView);
