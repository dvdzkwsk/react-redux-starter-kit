import React from 'react';
import TodoItem from 'components/todo-item';

export default class TodoList extends React.Component {
  static propTypes = {
    todos : React.PropTypes.array
  }

  constructor () {
    super();
  }

  renderTodos (todos) {
    if (!todos || !todos.length) {
      return <p>I'm sure you have something you need to do!</p>;
    }

    const { destroyTodo, toggleCompleteTodo } = this.props;

    // TODO: better way to do these bindings?
    return todos.map(todo =>
      <li className='list-group-item'>
        <TodoItem todo={todo}
                  destroy={destroyTodo.bind(null, todo.copy)}
                  toggle={toggleCompleteTodo.bind(null, todo.copy)} />
      </li>
    );
  }

  render () {
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            Stuff that you should do. Maybe, I guess.
          </h3>
        </div>
        <ul className='list-group'>
          {this.renderTodos(this.props.todos)}
        </ul>
      </div>
    );
  }
}
