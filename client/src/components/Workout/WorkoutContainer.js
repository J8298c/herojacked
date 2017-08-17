import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pullupsImg from '../../images/pullup.svg';
import userImg from '../../images/starlord.jpg';
import FeedCard from '../FeedCard';
import { fetchWorkouts } from '../../actions/index';
import WorkoutView from './WorkoutView';
import Loading from '../Loader';
import './workout.css';

class WorkoutContainer extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;
    this.props.fetchWorkouts(name);
  }
  render() {
    let workoutView;
    const { workouts, isLoading } = this.props;
    console.log(workouts);
    console.log(isLoading);
    if (isLoading) {
      workoutView = <Loading />;
    } else {
      workoutView = workouts.map((workout) => (
        <WorkoutView
          img={pullupsImg}
          workoutname={workout.name}
          workoutreps={workout.reps}
          workoutsets={workout.sets}
        />
      ));
      console.log(workoutView);
    }

    return (
      <div className="workoutcontainer">
        {workoutView}
        <FeedCard
          cardheader="Recent Activity"
          feedimg={userImg}
          feedcontent="3 days ago"
          feedsummary="You added StarLord workout to your current Workout."
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { workouts, isLoading, fetchError } = state.workouts;
  console.log(workouts, isLoading, fetchError);
  return {
    workouts,
    isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkouts }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
