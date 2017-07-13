import React, { Component } from 'react';
import Workout from './Workout';

class Workouts extends Component {
  render(props){
    console.log(this.props, 'the props');
    const workouts = this.props.props;
    const workoutList = workouts.map((workout) => {
      let key = 0;
      return (
        <Workout name={workout.name} reps={workout.reps} sets={workout.sets} keys={key++} />
      );
    });
    return (
      <div>
        {workoutList}
      </div>
    );
  }
}

export default Workouts;
