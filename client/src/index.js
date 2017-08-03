import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <WorkoutListContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
