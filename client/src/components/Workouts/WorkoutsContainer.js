import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkoutCard from '../WorkoutCard';
import weights from '../../images/weights-icon.svg';
import {fetchWorkouts} from "../../actions/index"
import './workouts.css';
let workoutcard;
class WorkoutsContainer extends Component {
    componentDidMount() {
        this.props.fetchWorkouts();
    }
    render(props) {
    if (this.props.hasErrored) {
       return  <p>Sorry there has been an Error</p>;
    }
    while(this.props.isLoading) {
        workoutcard =  <p>...Loading</p>;
    }
        return (
            <div>
                <Card.Group className="workoutcards">
                    {workoutcard}
                </Card.Group>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWorkouts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer);