import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import LandingPage from './Components/LandingPage';

const Routes = (
    <Router history={browserHistory} >
        <Route path="/" component={LandingPage} />
        <Route path="/workouts" component={WorkoutListContainer} />
    </Router>
);

export default Routes;

