import { constansts } from '.';

const initState = {
    todoInput: '',
    todos: [],
    editIndex: null,
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.isCompleted,
        completed: (todo) => todo.isCompleted,
    },
};
function reducer(state, action) {
    switch (action.type) {
        case constansts.SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case constansts.TOGGLE_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        case constansts.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case constansts.TOGGLE_TODO:
            const newTodos = [...state.todos];
            newTodos[action.payload].isCompleted =
                !newTodos[action.payload].isCompleted;
            return {
                ...state,
                todos: newTodos,
            };
        case constansts.START_EDIT_TODO:
            return {
                ...state,
                editIndex: action.payload,
            };
        case constansts.END_EDIT_TODO:
            const editTodos = [...state.todos];
            console.log(action.payload);
            editTodos[action.payload.index].title = action.payload.title;
            return {
                ...state,
                todos: editTodos,
                editIndex: null,
            };
        case constansts.DELETE_TODO:
            const deleteTodos = [...state.todos];
            deleteTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: deleteTodos,
            };
        case constansts.CLEAR_ALL_TODO:
            return {
                ...state,
                todos: [],
            };
        case constansts.CANCEL_EDIT:
            return {
                ...state,
                editIndex: null,
            };
        default:
            console.log('Not available action !!');
            break;
    }
}

export { initState };
export default reducer;
