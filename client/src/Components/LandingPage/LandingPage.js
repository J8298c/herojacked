import React from 'react';
import { Link } from 'react-router-dom';
import AppButton from '../Button';
import './landingpage.css';

const LandingPage = () => (
  <div className="landingpage">
    <h1>
      Welcome to HeroJacked!
    </h1>
    <Link to='/workouts'>
      <AppButton
        className="startBtn" content="Start"
      />
    </Link>
  </div>
);

export default LandingPage;
