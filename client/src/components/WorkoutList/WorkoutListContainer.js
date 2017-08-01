import React, { Component } from 'react';

class WorkoutListContainer extends Component {
  constructor(props) {
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
  render() {
    console.log(this.state, 'the state');
    return (
            <div>
                <h1>WorkoutListContainer</h1>
            </div>
    );
  }
}

export default WorkoutListContainer;

