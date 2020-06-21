import rootReducer from './reducers';
import { createStore } from 'redux';

export default createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());