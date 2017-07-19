import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducer/index';

const initAppState = {
  user: {
    email: '',
    password: '',
  },
  workouts: [],
};

const store = createStore(appReducer, initAppState, applyMiddleware(thunk));

export default store;
