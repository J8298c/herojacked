import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

ReactDOM.render(
<Provider store={store}>
    <Routes />
</Provider>, document.getElementById('root'));
registerServiceWorker();
