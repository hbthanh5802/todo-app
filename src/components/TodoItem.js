import { useState } from 'react';
import { actions, useStoreContext } from '../store';

function TodoItem({ todo }) {
    const [state, dispatch] = useStoreContext();
    const [input, setInput] = useState(todo.title);
    const handleEnterEdit = (e, index) => {
        const title = e.target.value.trim();
        if (e.key === 'Enter') {
            if (title) {
                const value = {
                    title,
                    index,
                };
                dispatch(actions.endEditTodo(value));
            }
        }
    };

    return (
        <li
            className={`todo-item ${
                state.editIndex === todo.index ? 'editing' : ''
            }`}
        >
            <div className="todo-item__main">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className="todo-checkbox"
                    checked={todo.isCompleted ? true : false}
                    onChange={() => dispatch(actions.toggleTodo(todo.index))}
                />
                <span
                    className={`todo-title ${todo.isCompleted ? 'active' : ''}`}
                    onDoubleClick={() =>
                        dispatch(actions.startEditTodo(todo.index))
                    }
                >
                    {todo.title}
                </span>
            </div>
            <span
                className="todo-item__delete-btn"
                onClick={() => dispatch(actions.deleteTodo(todo.index))}
            >
                <ion-icon name="close-outline"></ion-icon>
            </span>
            <div className="todo-item__input-box">
                <input
                    type="text"
                    value={input}
                    className="todo-item__input"
                    onKeyUp={(e) => handleEnterEdit(e, todo.index)}
                    onChange={(e) => setInput(e.target.value)}
                    onBlur={(e) => {
                        setInput(todo.title);
                        dispatch(actions.cancelEdit(''));
                    }}
                />
            </div>
        </li>
    );
}

export default TodoItem;
