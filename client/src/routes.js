import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import LandingPage from './Components/LandingPage/LandingPage';
import Workout from './Components/WorkoutList/Workout';
import LoginForm from './Components/Authentication/LoginForm';
import SignupForm from './Components/Authentication/SignupForm';
import Profile from './Components/User/Profile';

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={LandingPage} />
            <Route path="/workouts" component={WorkoutListContainer} />
            <Route path="/workouts/:workoutid" component={Workout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/profile" component={Profile} />
        </Router>
    </Provider>
);

export default Routes;
