import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAWorkout } from '../../actions/index';
import store from '../../store';

let workoutObj;
class Workout extends Component {
  constructor(props) {
    super(props);
    console.log('the props to searcha name', this.props.params.workoutid);
    fetch(`/workouts/workout/${this.props.params.workoutid}`)
        .then((resp) => resp.json())
        .then(json => {
          console.log(json);
        });
  }
  render() {
    console.log(workoutObj)
    const workout = this.props.params.workoutid;
    return (
            <h1>{workout}</h1>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAWorkout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Workout);
