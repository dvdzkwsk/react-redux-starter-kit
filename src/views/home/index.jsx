import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActionCreators from 'actions/todo';
import TodoList from 'components/todo-list';

// TODO: make the create-todo form a component so that a bound action
// can be provided rather than manually using this.props.dispatch(action)
@connect(state => ({ todos : state.todos }))
export default class HomeView extends React.Component {
  constructor () {
    super();
    this.state = {
      todo : ''
    };
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
    const todos   = this.props.todos.toJS(),
          actions = bindActionCreators(TodoActionCreators, this.props.dispatch);

    return (
      <div className='view view--home'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <TodoList todos={todos} {...actions} />
            {this.renderNewTodoForm()}
          </div>
        </div>
      </div>
    );
  }
}
