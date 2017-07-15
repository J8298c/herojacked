import React from 'react';

const Workout = (props) => (
    <div>
        <h1>{props.name}</h1>
        <ul>
            <li>Reps: {props.reps}</li>
            <li>Sets: {props.sets}</li>
        </ul>
    </div>
);
export default Workout;
