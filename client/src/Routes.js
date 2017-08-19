import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import WorkoutsContainer from './components/Workouts/WorkoutsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import CreateWorkoutContainer from './components/CreateWorkout/CreateWorkoutContainer';

/*
  if (user) {
    browserHistory.push('/restaurants');
  } else {
    browserHistory.replace('/');
  }
 */
class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/allworkouts' component={WorkoutsContainer} />
          <Route path='/workout/:name' component={WorkoutContainer} />
          <Route path='/profile' component={ProfileContainer} />
          <Route path='/create_workout' component={CreateWorkoutContainer} />
        </div>
      </Router>
    );
  }
}

export default Routes;
