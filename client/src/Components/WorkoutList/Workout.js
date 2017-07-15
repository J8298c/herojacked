import React, {Component} from 'react';

class Workout extends Component {
  render(props) {
    console.log('the props', this.props);
    return (
            <h1>The Workout Component</h1>
    );
  }
}
export default Workout;
