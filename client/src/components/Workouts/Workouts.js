import React, { Component } from 'react';
import Workout from './Workout';
import Buttons from '../Button';

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
        <Buttons label="test" />
      </div>
    );
  }
}

export default Workouts;
