/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo (text) {
    return { type: ADD_TODO, text };
}

export function completeTodo (index) {
    return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter (filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

export const actions = {
    addTodo,
    completeTodo,
    setVisibilityFilter
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter (state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return { ...state, visibilityFilter: action.filter };
        default:
            return state;
    }
}

const ACTION_HANDLERS = {
    [ADD_TODO] : function (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        };
    },
    [COMPLETE_TODO] : function (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, action.index),
                Object.assign({}, state.todos[action.index], { completed: true }),
                ...state.todos.slice(action.index + 1)
            ]
        };
    },
    [SET_VISIBILITY_FILTER] : visibilityFilter
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { todos:[], visibilityFilter: SHOW_ALL };
export default function todoReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
