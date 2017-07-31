import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/landingpage';
import NavBar from './components/Nav/NavBar';
import AppPage from './components/AppPage';
import store from './Store';

const Routes = (
    <Provider store={store}>
        <Router>
            <div>
                <NavBar />
                <Route exact path='/' component={LandingPage} />
                <Route path="/app" component={AppPage} />
            </div>  
        </Router> 
    </Provider>
);

export default Routes;
