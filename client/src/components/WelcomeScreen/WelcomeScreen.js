import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ScreenItems from './ScreenItems';
import './welcomescreen.css';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={
      items: [
          {
            name: 'Workouts',
              icon: 'lightning'
          },
          {
            name: 'Profile',
              icon: 'user'
          },
          {
            name: 'Hero Wod',
              icon: 'trophy'
          }
      ]
    };
  }
  render() {
    console.log(this.state, 'the state obj');
    const welcomeIcon = this.state.items.map((icon, i) => (
        <ScreenItems
            name={icon.icon}
            iconHeader={icon.name}
            key={`screenitem# ${i}`}
        />
    ));
    return (
      <Grid columns={2}>
          {welcomeIcon}
      </Grid>
    );
  }
}

export default WelcomeScreen;