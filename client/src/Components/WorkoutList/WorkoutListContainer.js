import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWorkouts } from '../../actions/index';
import store from '../../store';
import WorkoutList from './WorkoutsList';

class WorkoutListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    fetch('/workouts', { method: 'GET' })
      .then((response) => response.json())
      .then(json => {
        store.dispatch(this.props.fetchWorkouts(json));
      });
  }
  render(props) {
    const { workouts } = this.props;
    console.log(workouts, 'workouts being passed as props');
    return (
        <div>
          <WorkoutList workouts={workouts} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { workouts } = state;
  return {
    workouts,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkouts }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListContainer);
