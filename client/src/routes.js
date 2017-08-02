import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/Nav/NavBar';
import WorkoutListContainer from './components/WorkoutList/WorkoutListContainer';
import * as actions from './actions/index';

class Routes extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
         <Router>
             <div>
                 <NavBar />
                 <Route exact path='/' component={LandingPage} />
                 <Route path='/workouts' component={WorkoutListContainer} />
             </div>
         </Router>
    );
  }
}

export default connect(null, actions)(Routes);
