import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Card, Icon, Item, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import selfie from '../../images/selfie.jpg';
import shoulderPress from '../../images/shoulderpress.svg';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render(props) {
    const { user } =this.props;
    console.log(user);
    const extra = (
      <a>
      <Icon name='user' />
      16 Friends
    </a>
    );
    return (
        <div>
          { user ? user.username : 'still dont have it'}
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
