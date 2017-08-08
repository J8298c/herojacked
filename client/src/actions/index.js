import {  FETCH_WORKOUTS_ERROR, FETCH_WORKOUTS_SUCCESS, COMPONENT_IS_LOADING } from './const';

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

export function fetchWorkouts() {
    return (dispatch) => {
        fetch('/api/workouts')
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
