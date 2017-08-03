import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkoutCard from './WorkoutCard';
import { fetchingWorkouts } from '../../actions/index';
import Loading from '../Loader';

class WorkoutListContainer extends Component {
  componentDidMount() {
    this.props.fetchingWorkouts();
  }
  render() {
    let workoutCards;
    const { workouts } = this.props;
    if (workouts) {
      workoutCards = workouts.map((workout) => (
        <WorkoutCard
          header={workout.name} meta={workout.bodyPart}
          extra={workout.rating} key={workout._id}
        />
      ));
    } else {
      workoutCards = <Loading />;
    }
    return (
      <div>
        {workoutCards}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'the state in mapstatetoprops');
  const { workouts } = state;
  console.log(workouts, 'workout mapstatetoprops')
  return {
    workouts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingWorkouts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListContainer);

/*

Notes
1. Need to use redux thunk for fetch call
2. add logic for displaying star Icons as ratings
3. Style Component and import

*/
