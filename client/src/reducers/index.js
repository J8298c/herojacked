import { combineReducers } from 'redux';
import { fetchWorkoutsError, componentIsLoading, fetchWorkoutsSuccess} from './workout_reducer';

const appReducer = combineReducers({
   fetchWorkoutsSuccess,
    componentIsLoading,
    fetchWorkoutsError
});

export default appReducer;