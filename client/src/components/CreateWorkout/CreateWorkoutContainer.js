import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import Inputs from '../Input';
import './createworkoutcontainer.css';

class CreateWorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      workoutname: '',
      workoutreps: '',
      workoutsets: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const { workoutname, workoutreps, workoutsets } = this.state;
    axios
      .post('/api/workouts/create', {
        name: workoutname,
        sets: workoutsets,
        reps: workoutreps,
      })
      .then(response => { console.log(response); })
      .catch(err => { console.log(err); });
      /*
      add settime out function to show a loading
      while performing post
      also need an error page 
      */
  }
  render() {
    return (
      <Form className="createworkout">
        <Inputs
          type='text' placeholder='Enter workout name' name='workoutname'
          classname='workoutinputs' labeltext='Workout Name:'
          onChange={event => { this.setState({ workoutname: event.target.value }); }}
        />
        <Inputs
          type='text' placeholder='Enter workout reps' name='workoutreps'
          classname='workoutinputs' labeltext='Workout Reps:'
          onChange={event => { this.setState({ workoutreps: event.target.value }); }}
        />
        <Inputs
          type='text' placeholder='Enter workout sets' name='workoutsets'
          classname='workoutinputs' labeltext='Workout Sets:'
          onChange={event => { this.setState({ workoutsets: event.target.value }); }}
        />
        <Button
          onClick={this.onFormSubmit} className='createworkout-submit' content='Submit'
        />
      </Form>
    );
  }
}
export default CreateWorkoutContainer;
