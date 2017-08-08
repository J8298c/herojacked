import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import appReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
