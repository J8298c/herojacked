import { FETCH_WORKOUTS_ERROR, COMPONENT_IS_LOADING, FETCH_WORKOUTS_SUCCESS } from '../actions/const';

export function fetchWorkoutsError(state = false, action) {
    if (action.type === FETCH_WORKOUTS_ERROR) {
        return action.fetchError;
    }
    return state;
}

export function componentIsLoading(state = true, action) {
    if (action.type === COMPONENT_IS_LOADING) {
        return action.isLoading;
    }
    return state;
}

export function fetchWorkoutsSuccess(state = {}, action) {
    if(action.type === FETCH_WORKOUTS_SUCCESS) {
        return action.workouts;
    }
    return state;
}