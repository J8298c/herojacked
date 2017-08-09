import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './landingpage.css';
import weight from '../../images/weights-icon.svg';

const LandingPage = () => (
    <div className="landingpagecontainer">
        <h1>HeroJacked</h1>
        <img src={weight} alt="dumbbell icon" />
        <Button
            color='blue'
            animated='fade'
            className='signin'
            >
            <Button.Content visible>
            Sign in With Google
            </Button.Content>
            <Button.Content hidden>
                <Icon
                    name='google'
                />
            </Button.Content>
        </Button>
    </div>

);
export default LandingPage;
