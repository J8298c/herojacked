import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AddWorkout from './Components/AddWorkout/AddWorkout';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(<Provider store={store}>
  <AddWorkout />
</Provider>, document.getElementById('root'));
registerServiceWorker();
