import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import workoutReducer from './reducer/workout_reducer';

const initAppState = {
  user: {
    email: '',
    password: '',
  },
  workouts: [],
};

const store = createStore(workoutReducer, initAppState, applyMiddleware(thunk));

export default store;
