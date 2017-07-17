export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export function fetchWorkouts(workouts) {
  const action = {
    type: FETCH_WORKOUTS,
    workouts,
  };
  return action;
}
