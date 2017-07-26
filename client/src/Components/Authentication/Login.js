import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loggingUserIn } from '../../actions/index';
import Input from '../Input';
import Button from '../Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log('clicked');
    console.log('the state', this.state);
  }
  render() {
    return (
			<Form>
				<Input
  label='Email' htmlFor='email' type='text'className='auth-input' name='email'
  onChange={event => this.setState({ email: event.target.value })}
				/>
				<Input
  label='Password' htmlFor='password' type='password'
  className='auth-input' name='password'
  onChange={event => this.setState({ password: event.target.value })}
				/>
				<Button
  content='Login' className='auth-btn'
  onClick={this.onFormSubmit}
				/>
			</Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loggingUserIn }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);