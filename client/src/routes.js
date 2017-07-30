import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';

const Routes = (
    <Router>
        <Route path='/' component={LandingPage} />
    </Router>
);

export default Routes;
