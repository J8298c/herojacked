import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppTitle from '../AppTitle';
import AppIcon from '../AppIcon';
import AppButton from '../AppButton';
import './landingpage.css';
import weight from '../../images/weights-icon.svg';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    axios
    .get('/api/current_user')
    .then(response => { console.log(response.date); })
    .catch(err => { console.log(err); });
    this.signIn = this.signIn.bind(this);
  }
  signIn() {
    console.log('signing in');
    axios
    .get('/auth/google');
  }
  render() {
    return (
      <div className="landingpagecontainer">
          <AppTitle 
            size='huge' headerText='ThunderHammer' className='app-title'
          />
          <AppIcon 
            image={weight} size='big' alt='dumbell Icon' className='appicon'
          />
          <AppButton
            color='blue' animated='fade' className='signin' 
            buttonContent='Sign in with Google' iconName='google'
            onClick={this.signIn}
          />
      </div>
    );
  }
}
export default LandingPage;
