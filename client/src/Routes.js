import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import LandingPage from './components/LandingPage/LandingPage';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

const Routes = () => (
    <Router>
        <div>
         <Route exact path="/" component={LandingPage} />
            <Route path="/allworkouts" component={WorkoutListContainer} />
            <Route path="/workout/:name" compnent={WorkoutContainer} />
            <Route path="/welcome" component={WelcomeScreen} />
        </div>
    </Router>
);
export default Routes;
