import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button';
import Input from '../Input';
import './auth.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {
        email,
        password,
      },
    });
  }
  render() {
    return (
          <form>
            <Input
              type="text" placeholder="Email"
              onChange={event => this.setState({ email: event.target.value })} className="login"
            />
            <Input
              type="password" placeholder="Password"
              onChange={event => this.setState({ password: event.target.value })} className="login"
            />
            <Button className='appbutton' text="submit" onClick={this.onFormSubmit} />
          </form>
    );
  }
}

export default SignupForm;
