import React, { Component } from 'react';
import Workouts from './Workouts';

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const workouts = [
      {
        name: 'Jagaur',
        reps: 2, 
        sets: 3,
      },
      {
        name: 'Lion',
        reps: 2,
        sets: 4,
      },
      {
        name: 'atom',
        reps: 2,
        sets: 5,
      },
    ];
    return (
      <Workouts props={workouts} />
    );
  }
}

export default WorkoutContainer;

