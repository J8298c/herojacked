import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppImage from '../AppImage';
import ProfileButtons from './ProfileButtons';
import Buttons from '../Buttons';
import { fetchUser } from '../../actions/index';
import Loading from '../Loader';
import selfie from '../../images/selfie.jpg';
import UserActivityContainer from '../UserActivity/UserActivityContainer';

import './Profile.css';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='profile-container'>
        <div className='profilename'>
          {this.props.user ? this.props.user.username : <Loading />}
        </div>
        <AppImage 
          imageSrc={selfie} size='tiny' className='profileimage' shape="circular"
        />
        <ProfileButtons />
        <UserActivityContainer />
        <Buttons
          color="red" content="Delete Account" onClick={() => { console.log('clicked'); }}
          className="logoutBtn"
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { users } = state;
  console.log(state);
  return (
    users
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
