import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
