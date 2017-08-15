import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item } from 'semantic-ui-react';
import AppImage from '../AppImage';
import AppItem from '../AppItem';
import Buttons from '../Buttons';
import { fetchUser } from '../../actions/index';
import Loading from '../Loader';
import selfie from '../../images/selfie.jpg';
import wieghts from '../../images/weights-icon.svg';
import './Profile.css';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.user, 'the user');
    return (
      <div className='profile-container'>
        <div className='profilename'>
          {this.props.user ? this.props.user.username : <Loading />}
        </div>
        <AppImage 
          imageSrc={selfie} size='medium' className='profileimage'
          
        />
        <div className='profilebuttons'>
          <Buttons
            color='violet' content='Workouts' className='profilebutton'
          />
          <Buttons
            color='violet' content='Home' className='profilebutton'
          />
          <Buttons
            color='purple' content='Logout' className='profilebutton'
          />
        </div>
        <div>
        <Item.Group>
        <AppItem 
          imageSrc={wieghts} itemHeader='workout'
        />
        <AppItem 
          imageSrc={wieghts} itemHeader='workout'
        />
        <AppItem 
          imageSrc={wieghts} itemHeader='workout'
        />
      </Item.Group>
        </div>
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
