import React, { Component } from 'react';
import WorkoutList from './WorkoutsList';

class WorkoutListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(props){
    const elWorkouts = [
        { name: 'ThunderCats', reps: 5, sets: 4, id: 1 },
        { name: 'Heman', reps: 4, sets: 5, id: 2 },
        { name: 'Conan', reps: 3, sets: 2, id: 3 },
    ];

    return (
        <WorkoutList workouts={elWorkouts} />
    );
  }
}
export default WorkoutListContainer;
