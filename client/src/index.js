import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(<Provider store={store}>
  <WorkoutListContainer />
</Provider>, document.getElementById('root'));
registerServiceWorker();
