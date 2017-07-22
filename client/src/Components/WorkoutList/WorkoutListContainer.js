import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../../store.js';
import { fetchingWorkouts } from '../../actions/index';
import WorkoutList from './WorkoutCardList';
import './workoutcard.css';

class WorkoutListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.props.fetchingWorkouts();
  }
  render() {
    return (
      <WorkoutList workouts={this.props.workouts} />
    );
  }
}
function mapStateToProps(state) {
  const { workouts } = state;
  return {
    workouts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingWorkouts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListContainer);
