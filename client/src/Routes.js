import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/welcome" component={WelcomeScreen} />
            <Route path="/workouts" component={WorkoutListContainer} />
        </div>
    </Router>
);
export default Routes;
