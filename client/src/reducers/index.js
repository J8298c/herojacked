import { FETCH_WORKOUTS } from '../actions/const';

const workoutReducer = (state = {}, action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    const newState = Object.assign({}, state, { workouts });
    return newState;
  }
  return state;
};

export default workoutReducer;
