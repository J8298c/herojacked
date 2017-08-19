import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/index';
import AppTitle from '../AppTitle';
import AppIcon from '../AppIcon';
import AppButton from '../AppButton';
import './landingpage.css';
import weight from '../../images/weights-icon.svg';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.props.fetchUser();
  }
  render() {
    const { user } = this.props.users;
    console.log(user);
    console.log(this.props.users);
    return (
      <div className="landingpagecontainer">
        <AppTitle 
          size='huge' headerText='ThunderHammer' className='app-title'
        />
        <AppIcon 
          image={weight} size='big' alt='dumbell Icon' className='appicon'
        />
        <Link to="/auth/google"><AppButton
          color='blue' animated='fade' className='signin' 
          buttonContent={user ? `Welcome ${user.username}` : 'Sign in with Google'} iconName='google'
        /></Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'the state');
  const { users } = state;
  console.log(users);
  return {
    users,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
