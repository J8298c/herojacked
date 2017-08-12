import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkoutCard from '../WorkoutCard';
import weights from '../../images/weights-icon.svg';
import { fetchWorkouts } from '../../actions/index';
import Loading from '../Loader';
import './workouts.css';

class WorkoutsContainer extends Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    let workoutcard;
    const { workouts, isLoading, fetchError } = this.props;
    if (fetchError) {
      workoutcard = 'Sorry there has been error';
    } else if (isLoading) {
      workoutcard = <Loading />;
    } else {
      workoutcard = workouts.map((workout) => (
          <WorkoutCard
            cardheader={workout.name}
            image={weights}
            cardmeta={workout.bodyPart}
            buttontext="Go to workout"
            key={workout._id}
          />
      ));
    }
    return (
      <div>
        <Card.Group className="workoutcards">
          {workoutcard}
        </Card.Group>
        </div>
    );
  }
}
function mapStateToProps(state) {
  const { workouts, fetchError, isLoading } = state.workouts;
  return {
    workouts,
    fetchError,
    isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkouts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer);
