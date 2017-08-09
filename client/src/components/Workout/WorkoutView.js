import React from 'react';

const workoutView = (props) => (
    <div>
        <div>
            <div className="workouttitle">
                <img src={props.img}
                     alt="Icon of stick figure doing pullups"/>
                <h1>{props.workoutname}</h1>
            </div>
            <div className="workoutdetails">
                <p>{`Reps: ${props.workoutreps}`}</p>
                <p>{`Sets: ${props.workoutsets}`}</p>
            </div>
        </div>
    </div>
);
export default workoutView;

