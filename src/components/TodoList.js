import { useStoreContext } from '../store';
import TodoItem from './TodoItem';
import '../css/TodoList.css';
function TodoList() {
    const [state] = useStoreContext();
    const { todos, filter, filters } = state;
    let tempTodos = [];
    todos.forEach((todo, index) => {
        tempTodos.push({ ...todo, index: index });
    });
    return (
        <section className="main">
            <ul className="todo-list">
                {tempTodos.filter(filters[filter]).map((todo) => {
                    // console.log('TODO: ', todo);
                    return <TodoItem key={todo.index} todo={todo} />;
                })}
            </ul>
        </section>
    );
}

export default TodoList;
