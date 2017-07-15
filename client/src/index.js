import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WorkoutContainer from './Components/Workouts/WorkoutContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WorkoutContainer />, document.getElementById('root'));
registerServiceWorker();
