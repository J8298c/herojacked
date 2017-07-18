export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export function fetchWorkouts(workouts) {
  const action = {
    type: FETCH_WORKOUTS,
    workouts,
  };
  return action;
}

export const FETCH_A_WORKOUT = 'FETCH_A_WORKOUT';
export function fetchAWorkout(name) {
  const action = {
    type: FETCH_A_WORKOUT,
    name,
  };
  return action;
}

export function fetchingWorkouts() {
  return (dispatch) => {
    fetch('/workouts', { method: 'GET' })
      .then((response) => response.json())
      .then(json => {
        dispatch(fetchWorkouts(json));
      });
  };
}

export function fetchingAWorkout(name) {
  return (dispatch) => {
    dispatch(fetchAWorkout(name));
    const workoutname = `/workouts/workout/${name}`;
    fetch(workoutname, { method: 'GET' })
      .then((response) => (
       response
      ))
      .then((response) => response.json())
      .then(json => {
        dispatch(fetchAWorkout(json));
      });
  };
}
