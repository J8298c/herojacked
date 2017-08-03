import { FETCH_WORKOUTS } from './const';

export function fetchWorkouts(workouts) {
  const action = {
    type: FETCH_WORKOUTS,
    workouts,
  };
  return action;
}

export function fetchingWorkouts() {
  return (dispatch) => {
    fetch('/api/workouts')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWorkouts(json));
      });
  };
}
