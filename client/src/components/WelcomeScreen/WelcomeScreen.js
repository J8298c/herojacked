import React, { Component } from 'react';
import AppSearch from '../AppSearch';
import WelcomeScreenItem from './WelcomeScreenItem';
import './welcomescreen.css';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  render() {
    console.log(this.state, 'the state');
    return (
            <div>
                <div className='welcomeImageContainer'>
                  <AppSearch onInputChange={(e) => { this.setState({ query: e.target.value }); }} />
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
