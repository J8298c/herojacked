import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../Buttons';

const ProfileButtons = () => (
  <div className='profilebuttons'>
    <Link to="/allworkouts"><Buttons
      color='violet' content='Workouts' className='profilebutton'
    /></Link>
    <Buttons
      color='violet' content='Home' className='profilebutton'
    />
    <Buttons
      color='purple' content='Logout' className='profilebutton'
    />
  </div>
);
export default ProfileButtons;
