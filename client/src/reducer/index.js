import { combineReducers } from 'redux';
import workoutReducer from './workout_reducer';
import userReducer from './user_reducer';

const appReducer = combineReducers({
  workoutReducer,
  userReducer,
});

export default appReducer;
