import React from 'react';
import { connect } from 'react-redux';
import { createTodo, destroyTodo, toggleCompleteTodo } from 'actions/todo';

@connect(state => ({
  todos : state.todos
}))
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
    const { todo } = this.state;

    e.preventDefault();
    if (todo && todo.length) {
      this.props.dispatch(createTodo(todo));
      this.setState({
        todo : ''
      });
    }
  }

  _toggleComplete (copy) {
    this.props.dispatch(toggleCompleteTodo(copy));
  }

  renderTodos (todos) {
    return todos.map((todo, idx) =>
      <li className='todo__item' key={idx}>
        <div className='checkbox'>
          <label>
            <input type='checkbox'
                   checked={todo.complete}
                   onChange={this._toggleComplete.bind(this, todo.copy)}/>
            {todo.copy}
          </label>
        </div>
      </li>
    );
  }

  render () {
    const todos = this.props.todos.toJS();

    return (
      <div className='view view--home'>
        <h1>Stuff that you should do. Maybe, I guess.</h1>
        <ul className='todo__list list-unstyled'>
          {this.renderTodos(todos)}
        </ul>
        <form className='form-inline' onSubmit={::this._createTodo}>
          <div className='form-group'>
            <input name='todo'
                   className='form-control'
                   placeholder='Do something else!'
                   value={this.state.todo}
                   onChange={this._bindTo('todo')} />
          </div>
          <button type='submit' className='btn btn-default'>
            Create Todo
          </button>
        </form>
      </div>
    );
  }
}
