import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export const TodoApp = (props) => (
  <div>
    <AddTodo
      onAddClick={text => props.addTodo(text)} />
    <TodoList
      todos={props.visibleTodos}
      onTodoClick={index => props.completeTodo(index)} />
    <Footer
      filter={props.visibilityFilter}
      onFilterChange={nextFilter => props.setVisibilityFilter(nextFilter)} />
  </div>
);

TodoApp.propTypes = {
    visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired,
    addTodo: React.PropTypes.func.isRequired,
    completeTodo: React.PropTypes.func.isRequired,
    setVisibilityFilter: React.PropTypes.func.isRequired
};

export default TodoApp;
