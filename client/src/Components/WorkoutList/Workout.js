import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAWorkout } from '../../actions/index';
import store from '../../store';

class Workout extends Component {

  render() {
    const workout = this.props.params.workout;
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
