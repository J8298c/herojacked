import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Input from '../Input';
import AddWorkoutCheckBox from './AddWorkoutCheckbox';
import AppButton from '../Button';
import './AddWorkout.css';

class AddWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reps: '',
      sets: '',
      bodyParts: '',
    };
    this.createWorkout = this.createWorkout.bind(this);
  }
  createWorkout(e) {
    e.preventDefault();
    const{name, reps, sets} = this.state;
    console.log(this.state, 'state saved');
    fetch('/workouts/create', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.state),
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <Form>
        <Input
          type="text" name="name" className="createinput" htmlFor="name"
          label="WorkoutName"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <Input
          type="text" name="reps" className="createinput" htmlFor="reps"
          label="Reps"
          onChange={e => this.setState({ reps: Number(e.target.value) })}
        />
        <Input
          type="text" name="sets" className="createinput" htmlFor="sets"
          label="Sets"
          onChange={e => this.setState({ sets: Number(e.target.value) })}
        />
        <Input
          type="text" name="bodyParts" className="createinput" htmlFor="bodyParts"
          label="BodyParts"
          onChange={e => this.setState({ bodyParts: e.target.value })}
        />
        <AppButton
          content="Save" className="createButton" onClick={this.createWorkout}
        />
      </Form>
    );
  }
}
export default AddWorkout;
