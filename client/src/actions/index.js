import { FETCH_WORKOUTS, FETCH_A_WORKOUT } from './const';

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

export function fetchAWorkout(workout) {
  const action = {
    type: FETCH_A_WORKOUT,
      workout,
  };
  return action;
}

export function fetchingAWorkout(name) {
  return (dispatch) => {
    fetch(`/api/workouts/${name}`)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          dispatch(fetchAWorkout(json));
        })
  }
}