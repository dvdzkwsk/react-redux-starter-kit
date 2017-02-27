import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../modules/todo';

import TodoApp from '../components/TodoApp';

const mapDispatchToProps = {
    addTodo,
    completeTodo,
    setVisibilityFilter
};

function selectTodos (todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps (state) {
    return {
        visibleTodos: selectTodos(state.todo.todos, state.todo.visibilityFilter),
        visibilityFilter: state.todo.visibilityFilter
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
