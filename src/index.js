import ReactDOM from 'react-dom';
import App from './App';
import React from "react";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
    ,
    rootElement
);

serviceWorker.unregister();