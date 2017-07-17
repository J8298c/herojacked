import React, { Component } from 'react';
import WorkoutList from './WorkoutsList';

class WorkoutListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      workouts: [],
    };
    fetch('/workouts')
    .then((res) => res.json())
    .then(json => {
      console.log(json);
    });
  }
  render(props){
    return (
        <h1>Check the logs</h1>
    );
  }
}
export default WorkoutListContainer;
