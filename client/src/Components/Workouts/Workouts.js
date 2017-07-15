import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';

import Workout from './Workout';

class Workouts extends Component {
  render(props) {
    const workoutList = this.props.props;
    const workoutCards = workoutList.map((workout) => {
      return (
                <Workout name={workout.name} sets={workout.sets} reps={workout.reps} />
      );
    });
    return (
      <Container fluid={true}>
        <Row>
          { workoutCards }
        </Row>
    </Container>
    );
  }
}
export default Workouts;

