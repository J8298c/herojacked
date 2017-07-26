import { FETCH_WORKOUTS, ADD_WORKOUT, USER_LOGIN, FIND_A_WORKOUT } from '../actions/index';
import store from '../store';

const workoutReducer = (state = store.getState(), action) => {
  if (action.type === FETCH_WORKOUTS) {
    const { workouts } = action;
    const newState = Object.assign({}, state, {
      workouts,
    });
    return newState;
  } else if (action.type === ADD_WORKOUT) {
    const { workout } = action;
    const newState = Object.assign({}, state, {
      workout,
    });
    return newState;
  } else if (action.type === USER_LOGIN) {
    console.log('in the login reducer');
    const { user } = action;
    const newState = Object.assign({}, state, {
      user,
    });
    return newState;
  } else if (action.type === FIND_A_WORKOUT) {
    const { workout } = action;
    const newState = Object.assign({}, state, {
      workout,
    });
    return newState;
  }
  return state;
};

export default workoutReducer;
