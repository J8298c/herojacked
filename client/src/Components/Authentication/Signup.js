import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../Input';
import Button from '../Button';
import { signingUserUp } from '../../actions/index';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log('clicked');
    console.log('the state', this.state);
    this.props.signingUserUp(this.state);
  }
  render() {
    return (
      <Form>
        <Input
          label='Email' htmlFor='email' type='text'
          className='auth-input' name='email'
          onChange={event => this.setState({ email: event.target.value })}
        />
         <Input
           label='Password' htmlFor='password' type='password'
           className='auth-input' name='password'
           onChange={event => this.setState({ password: event.target.value })}
         />
         <Input
           label='Username' htmlFor='username' type='text'
           className='auth-input' name='username'
           onChange={event => this.setState({ username: event.target.value })}
         />
         <Button
           content='Login' className='auth-btn'
           onClick={this.onFormSubmit}
         />
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signingUserUp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Signup);
