import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import store from './Store';

const Routes = (
    <Provider store={store}>
        <Router>
            <Route path='/' component={LandingPage} />
        </Router> 
    </Provider>
);

export default Routes;
