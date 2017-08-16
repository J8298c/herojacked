import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppImage from '../AppImage';
import ProfileButtons from './ProfileButtons';
import { fetchUser } from '../../actions/index';
import Loading from '../Loader';
import selfie from '../../images/selfie.jpg';
import weights from '../../images/weights-icon.svg';
import WorkoutCard from '../WorkoutCard';
import './Profile.css';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.user, 'the user');
    const workoutProps = [{ name: 'bench press', bodyPart: 'chest', id: 1 }, { name: 'Squats', bodyPart: 'Legs', id: 2 }];
    const userFavs = workoutProps.map((fav) => (
      <div>
        <WorkoutCard 
          image={weights} cardheader={fav.name} cardmeta={fav.bodyPart} 
          buttontext="Go to Workout" key={fav.id}
        />
      </div>
      
    ));
    return (
      <div className='profile-container'>
        <div className='profilename'>
          {this.props.user ? this.props.user.username : <Loading />}
        </div>
        <AppImage 
          imageSrc={selfie} size='tiny' className='profileimage' shape="circular"
        />
        <ProfileButtons />
        {userFavs}
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
