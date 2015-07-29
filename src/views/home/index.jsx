import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  todos : state.todos
}))
export default class HomeView extends React.Component {
  constructor () {
    super();
  }

  renderTodos (todos) {
    return todos.map(todo =>
      <li className='todo__item' key={todo.copy}>{todo.copy}</li>
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
      </div>
    );
  }
}
