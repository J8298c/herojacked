import React, { Component } from 'react';

class Workout extends Component {
  render(props) {
    const workout = this.props.params.workoutid;
    /*
      fetch from db using the workout var
      then for loop for inputs to match how many sets for user to log wights
    */
    return (
            <h1>{workout}</h1>
    );
  }
}
export default Workout;
