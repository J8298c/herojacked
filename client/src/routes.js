import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WorkoutContainer from './Components/Workouts/WorkoutContainer';

const Routes = (
    <Router>
        <Route path="/workouts" component={WorkoutContainer} />    
    </Router>
);

export default Routes;
