import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import WorkoutCard from '../WorkoutCard';
import weights from '../../images/weights-icon.svg';
import './workouts.css';

class WorkoutsContainer extends Component {
    componentDidMount() {
        fetch('/api/workouts')
            .then(response => response.json())
            .then(json => {console.log('the response', json);})
    }
    render(props) {
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

export default WorkoutsContainer;