import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Input';
import './auth.css';

class SignupForm extends Component {
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
    console.log('clicked');
    console.log(this.state, 'the state')
  }
  render() {
    return (
          <form>
            <Input 
              type="text" placeholder="Email" 
              onChange={(e) => {this.setState({ email: e.target.value })}} className="login" 
            />
            <Input 
              type="password" placeholder="Password" 
              onChange={(e) => {this.setState({ password: e.target.value })}} className="login" 
            />
            <Button className='appbutton' text="submit" onClick={this.onFormSubmit} />
          </form>
    );
  }
}

export default SignupForm;
