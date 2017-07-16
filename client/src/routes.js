import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import LandingPage from './Components/LandingPage/LandingPage';
import Workout from './Components/WorkoutList/Workout';
import LoginForm from './Components/Authentication/LoginForm';
import SignupForm from './Components/Authentication/SignupForm';

const Routes = (
    <Router history={browserHistory} >
        <Route path="/" component={LandingPage} />
        <Route path="/workouts" component={WorkoutListContainer} />
        <Route path="/workouts/:workoutid" component={Workout} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
    </Router>
);

export default Routes;
