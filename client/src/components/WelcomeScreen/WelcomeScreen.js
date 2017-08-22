import React, { Component } from 'react';
import WelcomeScreenItem from './WelcomeScreenItem';
import './welcomescreen.css';

class WelcomeScreen extends Component {
  render() {
    return (
            <div>
                <div className='welcomeImageContainer' />
                <WelcomeScreenItem
                  linkTo='/profile' iconName='user' iconText='Profile'
                />
            </div>
    );
  }
}
export default WelcomeScreen;
