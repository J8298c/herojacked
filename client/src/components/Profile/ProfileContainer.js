import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileImage from './ProfileImage';
import ProfileButton from './ProfileButtons';
import { fetchUser } from '../../actions/index';
import Loading from '../Loader';
import selfie from '../../images/selfie.jpg';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.user, 'the user');
    return (
      <div>
        <ProfileImage
          image={selfie} size='large' className='profileImage'
        />
        <h1>
          {this.props.user ? this.props.user.username : <Loading /> }
        </h1>
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
