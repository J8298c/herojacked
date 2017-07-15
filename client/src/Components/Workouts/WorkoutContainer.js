import React, { Component } from 'react';
import Workouts from './Workouts';

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  consoleMessage(){
    console.log('hello');
  }
  render(props){
    const elWorkout = [
            { name: 'Thunderball', sets: 5, reps: 4 },
            { name: 'Thundercats', sets: 3, reps: 2 },
    ];
    return (
            <Workouts props={elWorkout} />
    );
  }
}
export default WorkoutContainer;
