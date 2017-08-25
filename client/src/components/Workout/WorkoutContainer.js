import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWorkouts } from '../../actions/index';

class WorkoutContainer extends Component {
  componentDidMount(props) {
    const { name } = this.props.match.params;
    console.log(name, 'the workout name to pass to fetchWorkouts');
    this.props.fetchWorkouts(name);
  }
  render() {
    return(
      <div>
        <h1>The WorkoutContainer</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    state,
  }
} 
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWorkouts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);