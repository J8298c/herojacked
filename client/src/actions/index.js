import axios from 'axios';
import { FETCH_WORKOUTS_ERROR, FETCH_WORKOUTS_SUCCESS, COMPONENT_IS_LOADING, FETCH_USER_SUCCESS, FETCH_USER_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR } from './const';

export function fetchWorkoutSuccess(workouts) {
  const action = {
    type: FETCH_WORKOUTS_SUCCESS,
    workouts,
  };
  return action;
}

export function fetchWorkoutsError(bool) {
  const action = {
    type: FETCH_WORKOUTS_ERROR,
    fetchError: bool,
  };
  return action;
}

export function componentIsLoading(bool) {
  const action = {
    type: COMPONENT_IS_LOADING,
    isLoading: bool,
  };
  return action;
}

export function fetchUserSuccess(user) {
  const action = {
    type: FETCH_USER_SUCCESS,
    user,
  };
  return action;
}

export function fetchUserError(bool) {
  const action = {
    type: FETCH_USER_ERROR,
    fetchError: bool,
  };
  return action;
}

export function signInSuccess(user) {
  const action = {
    type: SIGNIN_SUCCESS,
    user,
  };
  return action;
}

export function signInError(bool) {
  const action = {
    type: SIGNIN_ERROR,
    signInError: bool,
  };
  return action;
}

export function fetchWorkouts(name) {
  return (dispatch) => {
    let url;

    if (name) {
      url = `/api/workouts/${name}`;
    } else {
      url = '/api/workouts';
    }
    // fetch(url)
    axios
      .get(url)
      .then(response => {
        dispatch(componentIsLoading(false));
        return response;
      })
      .then(response => {
        console.log(response.data);
        const payload = response.data;
        dispatch(fetchWorkoutSuccess(payload));
      })
  };
}

export function fetchUser() {
  console.log('in the action');
  return (dispatch) => {
    axios
      .get('/api/current_user')
      .then(response => {
        dispatch(componentIsLoading(false));
        return response;
      })
      .then(response => {
        const payload = response.data;
        dispatch(fetchUserSuccess(payload));
      })
      .catch(() => { dispatch(fetchUserError(true)); });
  };
}


