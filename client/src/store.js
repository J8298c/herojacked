import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import workoutReducer from './reducers/index';

const store = createStore(workoutReducer, {}, applyMiddleware(reduxThunk));

export default store;
