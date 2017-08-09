import { combineReducers } from 'redux';
import workouts from './workout_reducer';
import users from './user_reducer';

const appReducer = combineReducers({
   workouts,
    users,
});

export default appReducer;