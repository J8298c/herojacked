import React, { Component } from 'react';

class WorkoutListContainer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      workouts: [],
    };
    fetch('/api/workouts')
      .then(res => res.json())
      .then(json => {
        console.log(json, 'response from DB');
      })
  }
  render() {
    return (
      <div>
        <h1>WorkoutListContainer</h1>
      </div>
    );
  }
}

export default WorkoutListContainer;
