import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WorkoutListContainer />, document.getElementById('root'));
registerServiceWorker();
