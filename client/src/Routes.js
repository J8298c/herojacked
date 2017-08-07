import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import WorkoutsContainer from './components/Workouts/WorkoutsContainer';

const Routes = () => (
    <Router>
        <div>
            <Route exact path='/' component={LandingPage} />
            <Route path='/allworkouts' component={WorkoutsContainer} />
            <Route path='/workout' component={WorkoutContainer} />
        </div>
    </Router>
);

export default Routes;
