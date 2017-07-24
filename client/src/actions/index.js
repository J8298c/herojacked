export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export function fetchWorkouts(workouts) {
  const action = {
    type: FETCH_WORKOUTS,
    workouts,
  };
  return action;
}
export const ADD_WORKOUT = 'ADD_WORKOUT';
export function addWorkout(workout) {
  const action = {
    type: ADD_WORKOUT,
    workout,
  };
  return action;
}

export function fetchingWorkouts() {
  return (dispatch) => {
    fetch('/workouts', { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch(fetchWorkouts(json));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addingWorkout(workout) {
  return (dispatch) => {
    fetch('/workouts/create', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(workout),
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .then(response => response.json())
    .then(json => {
      dispatch(addWorkout(json));
    })
    .catch(err => console.log(err));
  };
}

