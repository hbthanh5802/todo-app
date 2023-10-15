import '../css/App.css';
import Header from './Header';
import Controla from './Controls';
import TodoList from './TodoList';

function App() {
    // const [state, dispatch] = useStoreContext();
    // console.log(state, dispatch);
    return (
        <div className="app">
            <Header />
            <Controla />
            <TodoList />
        </div>
    );
}

export default App;
