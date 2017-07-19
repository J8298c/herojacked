import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Input';
import './auth.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signingUserIn } from '../../actions/index';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault();
    console.log('clicked');
    console.log(this.state, 'the state');
    const { email, password } = this.state;
    this.props.signingUserIn(email, password);
  }
  render() {
    return (
          <form>
            <Input
              type="text" placeholder="Email"
              onChange={event => this.setState({email: event.target.value})} className="login"
            />
            <Input
              type="password" placeholder="Password"
              onChange={event => this.setState({password: event.target.value})} className="login"
            />
            <Button className='appbutton' text="submit" onClick={this.onFormSubmit} />
          </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({signingUserIn}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
