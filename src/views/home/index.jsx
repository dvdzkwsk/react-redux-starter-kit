import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'actions/todo';
import store from 'stores';

@connect(state => ({
  todos : state.todos
}))
export default class HomeView extends React.Component {
  constructor () {
    super();
  }

  renderTodos (todos) {
    return todos.map(todo =>
      <li className='todo__item'>{todo.copy}</li>
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
