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

export function loggingUserIn(user) {
  return (dispatch) => {
    fetch('/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(user),
    })
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch(userLogin);
      })
      .catch(err => console.log(err));
  }
}

export function signingUserUp(creds) {
  return (dispatch) => {
    fetch('/signup', {
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
        return response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json, 'user signed up')
        // dispatch()
      })
      .catch(err => console.log(err));
  }
}
