import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './welcomescreen.css';

class WelcomeScreen extends Component {
  render() {
    return (
            <div>
                <div className='welcomeImageContainer'></div>
                <div className='welcomescreenitems'>
                    <div className='items'>
                       <Icon name='user' />
                        <p>Profile</p> 
                    </div>
                    <div className='items'>
                       <Icon name='user' className='welcomeicon'/>
                        <p className='welcomeicontext'>Profile</p> 
                    </div>
                </div>
            </div>
    );
  }
}
export default WelcomeScreen;
