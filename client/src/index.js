import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();
