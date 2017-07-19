import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Input';
import './auth.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault();
    const { email, password } = this.state;
  }
  render() {
    return (
        <div className="loginpage">
          <form>
            <h1>Apollo</h1>
              <Input
                type="text" placeholder="Email"
                onChange={event => this.setState({ email: event.target.value })} className="login-inputs"
              />
              <Input
                type="password" placeholder="Password"
                onChange={event => this.setState({ password: event.target.value })} className="login-inputs"
              />
              <Button className='loginbutton app-button' text="submit" onClick={this.onFormSubmit} />
            </form>
        </div>

    );
  }
}

export default LoginForm;
