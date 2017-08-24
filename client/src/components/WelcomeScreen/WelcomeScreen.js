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
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({ query: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
            <div>
                <div className='welcomeImageContainer'>
                  <AppSearch onInputChange={this.handleInputChange} />
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
