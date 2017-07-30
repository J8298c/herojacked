import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialAppState = {
  users: {
    email: '',
    password: '',
  },
  workouts: [],
};

const store = createStore(() => [], initialAppState, applyMiddleware(thunk));

export default store;
