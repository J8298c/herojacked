import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';
import WorkoutContainer from './components/Workout/WorkoutContainer';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/welcome" component={WelcomeScreen} />
            <Route exact path="/workouts" component={WorkoutListContainer} />
            <Route path="/workouts/:name" component={WorkoutContainer} />
        </div>
    </Router>
);
export default Routes;
