import React, { Component } from 'react';
import WorkoutList from './WorkoutsList';

class WorkoutListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      workouts: []
    };
  render(props){
    return (
        <WorkoutList workouts={elWorkouts} />
    );
  }
}
export default WorkoutListContainer;
