import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import WorkoutsContainer from './components/Workouts/WorkoutsContainer';
import WelcomeContainer from './components/WelcomeScreen/WelcomeContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const Routes = () => (
    <Router>
        <div>
            <Route exact path='/' component={LandingPage} />
            <Route path='/welcome' component={WelcomeContainer} />
            <Route path='/allworkouts' component={WorkoutsContainer} />
            <Route path='/workout/:name' component={WorkoutContainer} />
            <Route path='/profile' component={ProfileContainer} />
        </div>
    </Router>
);

export default Routes;
