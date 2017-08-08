import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pullupsImg from '../../images/pullup.svg';
import userImg from '../../images/starlord.jpg';
import FeedCard from '../FeedCard';
import { fetchWorkouts } from '../../actions/index';
import './workout.css';

class WorkoutContainer extends Component {
    componentDidMount() {
        this.props.fetchWorkouts();
    }
    render() {
        return (
            <div className="workoutcontainer">
                <div className="workouttitle">
                    <img src={pullupsImg} />
                    <h1>PullUp</h1>
                </div>
                <div className="workoutdetails">
                    <p>Reps: 10</p>
                    <p>Sets: 3</p>
                </div>
                <FeedCard
                    cardheader="Recent Activity"
                    feedimg={userImg}
                    feedcontent="3 days ago"
                    feedsummary="You added StarLord workout to your current Workout."
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        state,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWorkouts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
