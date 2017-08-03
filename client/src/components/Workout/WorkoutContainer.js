import React, { Component } from 'react';

class WorkoutContainer extends Component {
    render(props) {
        console.log(props.match.params, 'params');
        return (
            <h1>WorkoutContainer</h1>
        )
    }
}

export default WorkoutContainer;

