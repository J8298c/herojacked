import { FETCH_WORKOUTS, FETCH_A_WORKOUT } from '../actions/const';

const workoutReducer = (state = {}, action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    const newState = Object.assign({}, state, { workouts });
    return newState;
  } else if (action.type === FETCH_A_WORKOUT) {
    const { workout } = action;
    const newState = Object.assign({}, state, { workout });
    return newState;
  }
  return state;
};

export default workoutReducer;
