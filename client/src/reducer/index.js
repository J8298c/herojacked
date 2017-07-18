import { FETCH_WORKOUTS, FETCH_A_WORKOUT } from '../actions/index.js';
import store from '../store.js';

const workoutsReducer = (state = store.getState(), action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    return {
      workouts,
    };
  } else if (action.type === FETCH_A_WORKOUT) {
    const { workout } = action;
    return {
      workout,
    };
  }
  return state;
};
export default workoutsReducer;
