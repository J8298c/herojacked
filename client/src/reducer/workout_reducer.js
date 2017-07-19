import { FETCH_WORKOUTS } from '../actions/index.js';

const workouts = [];
const workoutsReducer = (state = workouts, action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    return {
      workouts,
    };
  } 
  return state;
};
export default workoutsReducer;
