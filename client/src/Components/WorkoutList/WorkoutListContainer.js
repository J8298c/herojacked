import React, { Component } from 'react';
import WorkoutCardList from './WorkoutCardList';

const workouts = [];

class WorkoutListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
    };
    fetch('/workouts', { method: 'GET' })
    .then((response) => {
      return response
    })
    .then(response => response.json())
    .then(json => {
      workouts.push(json)
    })
  }
  render() {
    console.log(workouts, 'the workouts arr');
    return (
      <WorkoutCardList props={workouts} />
    );
  }
}

export default WorkoutListContainer;
