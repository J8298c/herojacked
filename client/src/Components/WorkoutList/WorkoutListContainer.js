import React, { Component } from 'react';
import WorkoutCardList from './WorkoutCardList';

const workouts = [];

class WorkoutListContainer extends Component {
  constructor(props) {
    super(props);
    fetch('/workouts', { method: 'GET' })
      .then((resp) => resp.json())
      .then(json => {
        /*
        need to add dispatch here
        */
        workouts.push(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <WorkoutCardList props={workouts} />
    );
  }
}

export default WorkoutListContainer;
