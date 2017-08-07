import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkoutCard from '../WorkoutCard';
import weights from '../../images/weights-icon.svg';
import {fetchingAllWorkouts} from "../../actions/index"
import './workouts.css';

class WorkoutsContainer extends Component {
    componentDidMount() {
        this.props.fetchingAllWorkouts();
    }
    render(props) {
        const { workouts } = this.props;
        console.log(workouts);
        return (
            <div>
                <Card.Group className="workoutcards">
                    <WorkoutCard
                        image={weights} cardheader="Pullups" cardmeta="Shoulders" buttontext="Go to Workout"
                    />
                    <WorkoutCard
                        image={weights} cardheader="Pullups" cardmeta="Shoulders" buttontext="Go to Workout"
                    />
                </Card.Group>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { workouts } = state;
    return {
        workouts,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingAllWorkouts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer);