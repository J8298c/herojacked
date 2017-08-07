import React, { Component } from 'react';
import pullupsImg from '../../images/pullup.svg';
import userImg from '../../images/starlord.jpg';
import FeedCard from '../FeedCard';
import './workout.css';

class WorkoutContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        };
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
export default WorkoutContainer;
