import React       from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActionCreators from 'actions/todo';
import { TodoList } from 'components';

// We define mapStateToProps where we'd normally use the @connect
// decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  todos : state.todos
});
export class HomeView extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    todos  : React.PropTypes.instanceOf(Immutable.List)
  }
  constructor () {
    super();
    this.state = {
      todo : ''
    };
  }

  componentWillMount () {
    this._todoActions = bindActionCreators(
      TodoActionCreators, this.props.dispatch
    );
  }

  _bindTo (prop) {
    return (e) => this.setState({
      [prop] : e.target.value
    });
  }

  _createTodo (e) {
    e.preventDefault();
    this.props.dispatch(TodoActionCreators.createTodo(this.state.todo));
    this.setState({
      todo : ''
    });
  }

  renderNewTodoForm () {
    return (
      <form onSubmit={::this._createTodo}>
        <div className='row'>
          <div className='col-sm-9'>
            <input className='form-control'
                   placeholder='Do something else!'
                   value={this.state.todo}
                   onChange={this._bindTo('todo')} />
          </div>
          <div className='col-sm-3'>
            <button type='submit' className='btn btn-block btn-default'>
              Create Todo
            </button>
          </div>
        </div>
      </form>
    );
  }

  render () {
    const todos = this.props.todos.toJS();
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <TodoList todos={todos} {...this._todoActions} />
            {this.renderNewTodoForm()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
