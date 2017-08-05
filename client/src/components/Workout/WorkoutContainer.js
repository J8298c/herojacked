import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAWorkout } from '../../actions/index';
// import Loading from '../Loader';
// import Workout from './Workout';

let workoutView;
class WorkoutContainer extends Component {
  componentWillMount() {
    const { name } = this.props.match.params;
    this.props.fetchingAWorkout(name);
  }
  render(props) {    
    const { workout } = this.props;
    if (workout !== null) {
      workoutView = 'workout is readty to render';
    } else {
      workoutView = 'still not ready';
    }
    return (
        <div>
            {workoutView}
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { workout } = state;
  return {
    workout,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingAWorkout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);

