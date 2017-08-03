import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import LandingPage from './components/LandingPage';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/allworkouts" component={WorkoutListContainer} />
                    <Route path="/workouts/:name" compnent={WorkoutContainer} />
                </div>
            </Router>
        )
    }
};

export default Routes;





