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

export const FIND_A_WORKOUT = 'FIND_A_WORKOUT';
export function findAWorkout(workout) {
  const action = {
    type: FIND_A_WORKOUT,
    workout
  }
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
    .catch((err) => console.log(err));
  };
}

export function fetchingAWorkout(name) {
  return (dispatch) => {
    fetch(`/workouts/workout/${name}`)
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch(findAWorkout(json));
      })
      .catch(() => {
        console.log('I dont work')
      })
  };
}

/*
Auth Actions
*/

export const USER_LOGIN = 'USER_LOGIN';
export function userLogin(user) {
  const action = {
    type: USER_LOGIN,
    user,
  };
  return action;
}

export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export function userLoginError(message) {
  const action = {
    type: USER_LOGIN_ERROR,
    message,
  };
  return action;
}

export function loggingUserIn(creds) {
  console.log(creds, 'user creditinals');
  return (dispatch) => {
    fetch('/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(creds),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(response, 'the response');
        return response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json, 'the json');
        dispatch(userLogin(json));
      })
      .catch(err => dispatch(userLoginError(err)));
  };
}
