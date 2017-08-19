import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from './actions/index';
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
    console.log('componenet routes mounted');
    if (this.props.users) {
      console.log(this.props, 'all the props');
    }
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
function mapStateToProps(state) {
  const { users } = state;
  console.log(users, 'the users state OBJ');
  return {
    users,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(mapStateToProps, null)(Routes);
