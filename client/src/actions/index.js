import {  FETCH_WORKOUTS_ERROR, FETCH_WORKOUTS_SUCCESS, COMPONENT_IS_LOADING, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './const';

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

export function fetchWorkouts(name) {
    return (dispatch) => {
        let url;
        if (name) {
            url = `/api/workouts/${name}`;
        } else {
            url = '/api/workouts';
        }
        console.log(url, 'the url variable');
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(componentIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(json => dispatch(fetchWorkoutSuccess(json)))
            .catch(() => dispatch(fetchWorkoutsError(true)));
    }
}

export function fetchUser() {
    return (dispatch) => {
        fetch('/api/current_user')
            .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            dispatch(componentIsLoading(false));
            return response;
            })
            .then(response => response.json())
            .then(json => dispatch(fetchUserSuccess(json)))
            .catch(() => dispatch(fetchUserError(true)));
    }
}
