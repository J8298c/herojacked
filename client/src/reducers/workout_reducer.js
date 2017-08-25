import { FETCH_WORKOUTS_ERROR, COMPONENT_IS_LOADING, FETCH_WORKOUTS_SUCCESS } from '../actions/const';

const appState = {
  workouts: [],
  fetchError: false,
  isLoading: true,
};
export default (state = appState, action) => {
  if (action.type === FETCH_WORKOUTS_ERROR) {
    const { fetchError } = action;
    const newState = Object.assign({}, state, { fetchError });
    return newState;
  } else if (action.type === FETCH_WORKOUTS_SUCCESS) {
    const { workouts } = action;
    console.log(workouts, 'the name pf the workouts')
    console.log(workouts);
    const newState = Object.assign({}, state, { workouts });
    return newState;
  } else if (action.type === COMPONENT_IS_LOADING) {
    const { isLoading } = action;
    const newState = Object.assign({}, state, { isLoading });
    return newState;
  }
  return state;
};
// export function fetchWorkoutsError(state = false, action) {
//     if (action.type === FETCH_WORKOUTS_ERROR) {
//         return action.fetchError;
//     }
//     return state;
// }
//
// export function componentIsLoading(state = true, action) {
//     if (action.type === COMPONENT_IS_LOADING) {
//         return action.isLoading;
//     }
//     return state;
// }
//
// export function fetchWorkoutsSuccess(state = {}, action) {
//     if(action.type === FETCH_WORKOUTS_SUCCESS) {
//         return action.workouts;
//     }
//     return state;
// }
