import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingWorkouts } from '../../actions/index';
import store from '../../store';
import WorkoutList from './WorkoutsList';

class WorkoutListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.props.fetchingWorkouts();
  }
  render() {
    const { workouts } = this.props;
    return (
        <div>
          <WorkoutList workouts={workouts} />
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
  return bindActionCreators({ fetchingWorkouts }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListContainer);
