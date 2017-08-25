import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './UserActivity.css';

class UserActivityContainer extends Component {
  render() {
    const userActivity = {
      steps: 3500,
      floors: 2,
      left: 6500,
    };
    return (
            <div>
                <div className='icondiv'>
                  <Icon 
                    name='bicycle' size='huge' className='icondivimage'
                  />  
                </div>
                <div className='useractive'>
                    <div className='steps'>Steps</div>
                    <div className='steps'>{userActivity.steps}</div>
                </div>
                <div className='useractive'>
                    <div className='floors'>Floors</div>
                    <div className='floors'>{userActivity.floors}</div>
                </div>
            </div>
    );
  }
}
export default UserActivityContainer;
