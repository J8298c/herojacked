import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAWorkout } from '../../actions/index';

const imageUrl = '../../images/shoulderpress.svg';

class Workout extends Component {
  constructor(props) {
    super(props);
    this.props.fetchingAWorkout(this.props.params.workoutid);
  }
  render() {
    const { workouts } = this.props;
    return (
      <div>
      <div>
        <img src={imageUrl} alt="wieght icon" />
      </div>
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
