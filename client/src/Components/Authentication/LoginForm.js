import React, { Component } from 'react';
import Button from '../Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault();
    console.log('clicked');
  }
  render() {
      return(
          <form>
            <input type="text" placeholder="Enter your email" className="formInput" />
            <input type="text" placeholder="Enter your email" className="formInput" />
            <Button className='appbutton' text="submit" onClick={this.onFormSubmit} />
          </form>
      );
  }
}

export default LoginForm;
