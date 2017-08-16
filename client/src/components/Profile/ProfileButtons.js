import React from 'react';
import Buttons from '../Buttons';

const ProfileButtons = () => (
  <div className='profilebuttons'>
    <Buttons
      color='violet' content='Workouts' className='profilebutton'
    />
    <Buttons
      color='violet' content='Home' className='profilebutton'
    />
    <Buttons
      color='purple' content='Logout' className='profilebutton'
    />
  </div>
);
export default ProfileButtons;
