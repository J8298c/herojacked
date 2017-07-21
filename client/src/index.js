import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
