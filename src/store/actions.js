import { constansts } from '.';
export const setTodoInput = (payload) => {
    return {
        type: constansts.SET_TODO_INPUT,
        payload,
    };
};

export const toggleFilter = (payload) => {
    return {
        type: constansts.TOGGLE_FILTER,
        payload,
    };
};

export const addTodo = (payload) => {
    return {
        type: constansts.ADD_TODO,
        payload,
    };
};

export const toggleTodo = (payload) => {
    return {
        type: constansts.TOGGLE_TODO,
        payload,
    };
};

export const startEditTodo = (payload) => {
    return {
        type: constansts.START_EDIT_TODO,
        payload,
    };
};

export const endEditTodo = (payload) => {
    return {
        type: constansts.END_EDIT_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: constansts.DELETE_TODO,
        payload,
    };
};

export const clearAllTodo = (payload) => {
    return {
        type: constansts.CLEAR_ALL_TODO,
        payload,
    };
};
export const cancelEdit = (payload) => {
    return {
        type: constansts.CANCEL_EDIT,
        payload,
    };
};
