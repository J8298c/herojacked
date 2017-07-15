import React from 'react';

const WorkoutCard = (props) => (
    <div className="workoutCard">
        <h5>{props.name}</h5>
        <p>Sets: {props.sets}</p>
        <p>Reps: {props.reps}</p>
    </div>
);
export default WorkoutCard;
