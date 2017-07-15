import React from 'react';
import { Link } from 'react-router';

const WorkoutCard = (props) => (
    <div className="workoutCard">
        <Link to={`/workouts/${props.name}`}>
            <h5>{props.name}</h5>
        </Link>
        <p>Sets: {props.sets}</p>
        <p>Reps: {props.reps}</p>
    </div>
);
export default WorkoutCard;
