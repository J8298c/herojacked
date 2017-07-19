import { FETCH_WORKOUTS } from '../actions/index.js';
import store from '../store.js';

const workoutsReducer = (state = store.getState(), action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    return {
      workouts,
    };
  } 
  return state;
};
export default workoutsReducer;
