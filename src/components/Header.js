import { useStoreContext } from '../store';
import { actions } from '../store';
import '../css/Header.css';
function Header() {
    const [state, dispatch] = useStoreContext();

    const handleEnterTodoInput = (e) => {
        if (e.key === 'Enter' && state.todoInput.trim()) {
            const todo = {
                title: state.todoInput,
                isCompleted: false,
            };
            dispatch(actions.addTodo(todo));
            dispatch(actions.setTodoInput(''));
        }
    };
    return (
        <div className="header">
            <div className="input-box">
                <span className="input-icon">
                    <ion-icon name="create-outline"></ion-icon>
                </span>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Enter your task here..."
                    value={state.todoInput}
                    onChange={(e) => {
                        dispatch(actions.setTodoInput(e.target.value));
                    }}
                    onKeyUp={handleEnterTodoInput}
                />
            </div>
        </div>
    );
}

export default Header;
