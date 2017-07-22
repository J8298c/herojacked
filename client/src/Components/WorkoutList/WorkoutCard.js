import React from 'react';
import { Card } from 'semantic-ui-react';

const WorkoutCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta>
        Chest
      </Card.Meta>
    </Card.Content>
  </Card>
);
export default WorkoutCard;
