import React, { Component } from 'react';
import ScreenItem from './ScreenItems';

class WelcomeScreen extends Component {
  render() {
    const categories = ['profile', 'workouts', 'waterintake', 'steps'];
    const screenCards = categories.forEach((category, i) => (
      <ScreenItem 
        name='hand spock'
        iconHeader={category[i]}
      />
    ));
    return (
      <div>
        {screenCards}
      </div>
    );
  }
}

export default WelcomeScreen;
