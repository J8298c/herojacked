import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/Nav/NavBar';
import store from './Store';

const Routes = (
    <Provider store={store}>
        <Router>
            <div>
                <NavBar />
                <Route exact path='/' component={LandingPage} />
            </div>  
        </Router> 
    </Provider>
);

export default Routes;
