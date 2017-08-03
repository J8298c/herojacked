import React from 'react';
import LabelButton from '../LabelButton';

const LandingPage = () => (
  <div>
    <h1>Welcome to ThunderHammer</h1>
    <LabelButton 
      className="landing-button" color="blue" 
      content="Sign In With Google" icon="google"
      onClick={() => { console.log('clicked'); }}
    />
  </div>
);

export default LandingPage;
