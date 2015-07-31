import React from 'react';
import { connect } from 'react-redux';
import { createTodo, destroyTodo } from 'actions/todo';

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

  _destroyTodo (id) {
    this.props.dispatch(destroyTodo(id));
  }

  renderTodos (todos) {
    return todos.map(todo =>
      <li className='todo__item'
          key={todo.id}
          onClick={this._destroyTodo.bind(this, todo.id)}>
        {todo.copy}
      </li>
    );
  }

  render () {
    const todos = this.props.todos.toJS();

    return (
      <div className='view view--home'>
        <h1>Stuff that you should do. Maybe, I guess.</h1>
        <ul className='todo__list'>
          {this.renderTodos(todos)}
        </ul>
        <form className='create-todo' onSubmit={::this._createTodo}>
          <label htmlFor='todo'>Another thing to do:</label>
          <input name='todo'
                 value={this.state.todo}
                 onChange={this._bindTo('todo')} />
          <button className='btn'>Create Todo</button>
        </form>
      </div>
    );
  }
}
