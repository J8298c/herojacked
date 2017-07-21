import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WorkoutListContainer />, document.getElementById('root'));
registerServiceWorker();
