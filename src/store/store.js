import { createStore } from 'redux';
//import { rootReducer } from '../rootReducer'
import { counterReducer } from '../counter/counterReducer';

const store = createStore(
    counterReducer,    
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export { store };
