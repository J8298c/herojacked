import { FETCH_WORKOUTS, ADD_WORKOUT } from '../actions/index';
import store from '../store';

const workoutReducer = (state = store.getState(), action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    const newState = Object.assign({}, state, {
      workouts,
    });
    return newState;
  }
  if (action.type === ADD_WORKOUT) {
    const { workout } = action;
    const newState = Object.assign({}, state, {
      workout,
    });
    return newState;
  }
  return state;
};

export default workoutReducer;
