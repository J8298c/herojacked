import React from 'react';
import { Button } from 'react-mdl';
import './landingpage.css';

const LandingPage = () => (
    <div className="landingpagecontainer">
        <h1>HeroJacked</h1>
        <Button name="google"
        ripple={true} className="signin" primary={true} raised={true}
                onClick={() => { console.log('clicked')}}
        >SignIn with Google</Button>
    </div>

);
export default LandingPage;
