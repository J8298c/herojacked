import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const iconStyle = {
  fontSize: '22px',
  color: '#E4EBF1',
  marginBottom: '5px',
};

const textStyle = {
  color: '#E4EBF1',
  fontSize: '10px',
};

const WelcomeScreenItem = (props) => (
  <Link to={props.linkTo}>
    <div className='items'>
      <Icon name={props.iconName} className='welcomeicon' style={iconStyle} />
      <p className='welcomeicontext' style={textStyle}>{props.iconText}</p> 
    </div>
  </Link>
);

export default WelcomeScreenItem;
