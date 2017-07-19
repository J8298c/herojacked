import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAWorkout } from '../../actions/index';

class Workout extends Component {
  constructor(props) {
    super(props);
    console.log('the props to searcha name', this.props.params.workoutid);
    this.props.fetchingAWorkout(this.props.params.workoutid);
  }
  render() {
    const { workouts } = this.props;
    return (
      <div>
      <h1>{workouts.name}</h1>
      <p> Reps: {workouts.reps}</p>
      <p> Sets: {workouts.sets}</p>
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
