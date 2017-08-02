import React, { Component } from 'react';
import WorkoutCard from './WorkoutCard';

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
        this.setState({workouts: json});
      })
  }
  render() {
    console.log(this.state, 'the state of application');
    const { workouts } = this.state;
    console.log('workouts var', workouts);
    const workoutCards = workouts.map((workout) => (
      <WorkoutCard
        header={workout.name} key={workout._id}
        meta={workout.reps}
      />
    ));
    return (
      <div>
        {workoutCards}
      </div>
    );
  }
}

export default WorkoutListContainer;

/*

Notes
1. Need to use redux thunk for fetch call
2. add logic for displaying star Icons as ratings
3. Style Component and import

*/
