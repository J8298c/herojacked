export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export function fetchWorkouts(workouts) {
  const action = {
    type: FETCH_WORKOUTS,
    workouts,
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
