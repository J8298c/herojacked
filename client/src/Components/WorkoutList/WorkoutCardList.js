import React, { Component } from 'react';
import WorkoutCard from './WorkoutCard';

class WorkoutList extends Component {
  render(props) {
    const elWorkout = this.props.workouts;
    const workoutcards = elWorkout.map((workout) => {
      return (
        <WorkoutCard
          name={workout.name} key={workout._id} bodyPart={workout.bodyPart}
          rating={workout.rating}
        />
      );
    });
    return (
      <div>
        {workoutcards}
      </div>
    );
  }
}

export default WorkoutList;
