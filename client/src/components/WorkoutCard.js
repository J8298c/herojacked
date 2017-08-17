import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WorkoutCard = (props) => (
  <Card className="workoutcard">
    <Card.Content>
      <Image
        floated='right' size='mini' src={props.image} alt="The workout icon"
      />
      <Card.Header className="workoutcard-title">
        {props.cardheader}
      </Card.Header>
      <Card.Meta>
        {props.cardmeta}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className="link-btn">
        <Link to={`/workout/${props.cardheader}`}><Button basic color="green">
          {props.buttontext}
        </Button></Link>
      </div>
    </Card.Content>
  </Card>
);

export default WorkoutCard;
