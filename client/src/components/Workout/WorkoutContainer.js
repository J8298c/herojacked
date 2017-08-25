/*
  fetchs the workout passed as props from Router
  and displays on screen
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWorkouts } from '../../actions/index';
import Loader from '../Loader';

class WorkoutContainer extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;
    console.log(name, 'the workout name to pass to fetchWorkouts');
    this.props.fetchWorkouts(name);
  }
  render() {
    const {workouts, isLoading} = this.props.workouts;
    console.log(workouts, isLoading, 'pulled from props');
    if(isLoading) {
      return (
        <isLoading />
      )
    }
    return(
      <div>
        <h1>{workouts.name}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { workouts } = state;
  console.log('pulling from the state', workouts);
  return {
    workouts,
  }
} 
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWorkouts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);

/*
  1. Add a setTimeout to reducer or action FetchWorkout to renderLoading component 
  2. Display the workout in a nice UI look at angelsList Uplabs
  3. Give the user the ability to return to welcome Screen or create thier own workout
*/