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

export function fetchingAWorkout(name) {
  return (dispatch) => {
    fetch(`/workouts/workout/${name}`)
        .then((resp) => resp.json())
        .then(json => {
          dispatch(fetchWorkouts(json));
        });
  };
}

export const LOGIN_USER = 'LOGIN_USER';
export function loginUser(email, password) {
  const action = {
    type: LOGIN_USER,
    email,
    password,
  };
  return action;
}

export const SIGNUP_USER = 'SIGNUP_USER';
export function signupUser(email, password) {
  const action = {
    type: SIGNUP_USER,
    email,
    password,
  };
  return action;
}
