import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import LandingPage from './Components/LandingPage';
import Workout from './Components/WorkoutList/Workout';
import LoginForm from './Components/Authentication/LoginForm';

const Routes = (
    <Router history={browserHistory} >
        <Route path="/" component={LandingPage} />
        <Route path="/workouts" component={WorkoutListContainer} />
        <Route path="/workouts/:workoutid" component={Workout} />
        <Route path="/login" component={LoginForm} />
    </Router>
);

export default Routes;

