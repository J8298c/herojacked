import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import LandingPage from './Components/LandingPage';
import Workout from './Components/WorkoutList/Workout';

const Routes = (
    <Router history={browserHistory} >
        <Route path="/" component={LandingPage} />
        <Route path="/workouts" component={WorkoutListContainer} />
        <Route path="/workouts/:workoutid" component={Workout} />
    </Router>
);

export default Routes;

