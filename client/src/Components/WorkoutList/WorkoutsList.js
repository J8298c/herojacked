import React, { Component } from 'react';
import WorkoutCard from './WorkoutCard';

class WorkoutList extends Component {
  render() {
    const { workouts } = this.props;
    const workoutCards = workouts.map((workout) => {
      return (
            <WorkoutCard 
              name={workout.name} sets={workout.sets} reps={workout.reps} key={workout.id}
            />
      );
    });
    return (
            <div>
                {workoutCards}
            </div>
    );
  }
}
export default WorkoutList;
