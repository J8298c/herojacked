import { FETCH_WORKOUTS } from '../actions/index';
import store from '../store';

const workoutReducer = (state = store.getState(), action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    const newState = Object.assign({}, state, {
      workouts,
    });
    return newState;
  }
  return state;
};

export default workoutReducer;
