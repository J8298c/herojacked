import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import workoutReducer from './reducers/index';

const initialAppState = {
  user: {
    email: '',
    password: '',
  },
  workouts: [],
};

const store = createStore(workoutReducer, initialAppState, applyMiddleware(thunk));

export default store;
