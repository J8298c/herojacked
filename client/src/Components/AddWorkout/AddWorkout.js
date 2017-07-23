import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Input from '../Input';
import AddWorkoutCheckBox from './AddWorkoutCheckbox';
import AppButton from '../Button';

class AddWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reps: '',
      sets: '',
      bodyParts: '',
    }
    this.createWorkout = this.createWorkout.bind(this);
  }
  createWorkout(e) {
    e.preventDefault();
    console.log(this.state, 'state saved');
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
          onChange={e => this.setState({ reps: e.target.value })}
        />
        <Input
          type="text" name="sets" className="createinput" htmlFor="sets"
          label="Sets"
          onChange={e => this.setState({ sets: e.target.value })}
        />
        <AddWorkoutCheckBox
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
