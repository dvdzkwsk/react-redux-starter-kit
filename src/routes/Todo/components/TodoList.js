import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    render () {
        return (
          <ul>
            {this.props.todos.map((todo, index) =>
              <Todo {...todo} key={index}
                onClick={() => this.props.onTodoClick(index)} />
            )}
          </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired
};
