import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAWorkout } from '../../actions/index';
import Workout from './Workout';

class WorkoutContainer extends Component {
  componentWillMount(){
    const { name } = this.props.match.params;
    console.log(name, 'name of workout');
    this.props.fetchingAWorkout(name);
  }
  render(props) {
    const { workout } = this.props;

    return (
        <div>
            <Workout 
                name={workout.name}
                reps={workout.reps}
                sets={workout.sets}
            />
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { workout } = state;
  console.log(workout);
  return {
    workout,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingAWorkout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);

