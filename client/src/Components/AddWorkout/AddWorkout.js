import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { addingWorkout } from '../../actions/index';
import PageHeader from '../PageHeader/PageHeader';
import Input from '../Input';
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
    console.log(this.state, 'state saved');
    this.props.addingWorkout(this.state);
  }
  render() {
    return (
      <div>
        <PageHeader text='Add A Workout'/>
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addingWorkout }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddWorkout);
