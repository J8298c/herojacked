import React from 'react';
import AppButton from '../Button';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landingpage">
    <h1>
      Welcome to HeroJacked!
    </h1>
    <AppButton
      className="startBtn" onClick={event => { event.preventDefault(); console.log('clicked'); }}
      content="Start"
    />
  </div>
);

export default LandingPage;
