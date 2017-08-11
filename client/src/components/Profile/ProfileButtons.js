import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProfileButton = (props) => (
  <Button.Group>
    <Link to={props.buttonOneLink}>
      <Button className={props.className}>{props.buttonOneText}</Button>
    </Link>
    <Link to={props.buttonTwoLink}>
      <Button className={props.className}>{props.buttonTwoText}</Button>
    </Link>
    <Link to={props.buttonThreeLink}>
      <Button className={props.className}>{props.buttonThreeText}</Button>
    </Link>
  </Button.Group>
);
export default ProfileButton;
