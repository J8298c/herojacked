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
  render() {
    const extra = (
      <a>
      <Icon name='user' />
      16 Friends
    </a>
    );
    return (
        <div>
          <Card>
            <Card.Content>
              <Image
                floated='right' size='mini' src={selfie}
              />
            </Card.Content>
            <Card.Content header='Julio Mojica' />
            <Card.Content meta='Male' />
            <Card.Content description='200lbs' />
            <Card.Content extra={extra} />
          </Card>
          <Item>
            <Item.Image
              size='small'
              src={shoulderPress}
            />
            <Item.Content verticalAlign='center'>
              <Item.Header>Workouts</Item.Header>
            </Item.Content>
          </Item>
        </div>
    );
  }
}
function mapStateToProps(state) {
  return (
      state
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
