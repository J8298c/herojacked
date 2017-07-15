import React from 'react';
import Col from 'muicss/lib/react/col';

const Workout = (props) => (
            <Col md="3" xs="5">
                <h4>{props.name}</h4>
                <p>{props.sets}</p>
                <p>{props.reps}</p>
            </Col>
);

export default Workout;
