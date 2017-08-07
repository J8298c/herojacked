export const FETCH_ALL_WORKOUTS = 'FETCH_ALL_WORKOUTS'
export const FETCH_A_WORKOUT = 'FETCH_A_WORKOUT';


export function fetchAllWorkouts(workouts) {
    const action = {
        type: FETCH_ALL_WORKOUTS,
        workouts,
    };
    return action;
}

export function fetchAWorkout(workout) {
    const action = {
        type: FETCH_A_WORKOUT,
        workout,
    };
    return action;
}
