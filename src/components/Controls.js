import { actions, useStoreContext } from '../store';
import '../css/Controls.css';

function Controla() {
    const [state, dispatch] = useStoreContext();
    return (
        <div className="controls">
            <section className="filter-box">
                {Object.keys(state.filters).map((filterKey) => (
                    <span
                        key={filterKey}
                        className={`filter-item ${
                            state.filter === filterKey ? 'active' : ''
                        }`}
                        onClick={() =>
                            dispatch(actions.toggleFilter(filterKey))
                        }
                    >
                        {filterKey[0].toUpperCase() + filterKey.slice(1)}
                    </span>
                ))}
            </section>
            <button
                className="clear-all-btn"
                onClick={() => dispatch(actions.clearAllTodo(''))}
            >
                Clear All
            </button>
        </div>
    );
}

export default Controla;
