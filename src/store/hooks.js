import Context from './Context';
import { useContext } from 'react';

function useStoreContext() {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}

export { useStoreContext };
