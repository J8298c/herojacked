import React from 'react';
import AppTitle from '../AppTitle';
import './landingpage.css';
import dumbells from '../../images/weights-icon.svg';
import AppImage from '../AppImage';
import AppButton from '../AppButton';

const LandingPage = () => (
  <div className='landingpagecontainer'>
    <AppTitle
      size='huge' headerText='HeroJacked' className='header'
    />
    <AppImage
      imageSrc={dumbells} imageSize='big' className='image' alt='icon of dumbell'
    />
    <a href='/auth/google'><AppButton
      buttonContent='Sign in with Google' iconName='google'
      color='blue' animated='fade' className='signin'
    /></a>
  </div>
);
export default LandingPage;
