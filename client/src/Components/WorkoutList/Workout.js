import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAWorkout } from '../../actions/index';
import WorkoutCard from './WorkoutCard';

class Workout extends Component {
  constructor(props) {
    super(props);
    console.log('the props to searcha name', this.props.params.workoutid);
    this.props.fetchingAWorkout(this.props.params.workoutid);
  }
  render() {
    const { workouts } = this.props;
    console.log(workouts, 'the workout var');
    return (
      <div>
      <h1>trying</h1>
      </div> 
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
  return bindActionCreators({ fetchingAWorkout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Workout);
