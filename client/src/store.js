import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import workoutsReducer from './reducer/index';

const initAppState = {
  user: {
    email: '',
    password: '',
  },
  workouts: [],
};

const store = createStore(workoutsReducer, initAppState, applyMiddleware(thunk));

export default store;
