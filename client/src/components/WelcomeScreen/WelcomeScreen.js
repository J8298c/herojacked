import React, { Component } from 'react';
import AppSearch from '../Search/AppSearch';
import WelcomeScreenItem from './WelcomeScreenItem';
import './welcomescreen.css';

class WelcomeScreen extends Component {
  render() {
    return (
      <div>
        <div className='welcomeImageContainer'>
          <AppSearch />
        </div>
        <WelcomeScreenItem
          linkTo='/profile' iconName='user' iconText='Profile'
        />
        <WelcomeScreenItem
          linkTo='/allworkouts' iconName='superpowers' iconText='Workouts'
        />
        <WelcomeScreenItem
          linkTo='/hero' iconName='flask' iconText='Hero'
        />
        <WelcomeScreenItem
          linkTo='/hero' iconName='flask' iconText='Hero'
        />
      </div>
    );
  }
}
export default WelcomeScreen;
