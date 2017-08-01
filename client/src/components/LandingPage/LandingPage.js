import React from 'react';
import LabelButton from '../LabelButton';

const LandingPage = () => (
  <div>
        <h1>ThunderHammer</h1>
        <LabelButton
          color='blue' content='Sign in with Google'
          icon='google'
          labelObj={{ as: 'a', basic: true, color: 'blue', pointing: 'left'}}
        />
  </div>
);

export default LandingPage;
