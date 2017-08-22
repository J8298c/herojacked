import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WelcomeScreenItem = (props) => (
  <Link to={props.linkTo}>
    <div className='items'>
      <Icon name={props.iconName} className='welcomeicon'/>
      <p className='welcomeicontext'>{props.iconText}</p> 
    </div>
  </Link>
);

export default WelcomeScreenItem;
