import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
    this.handleClickItem = this.handleClickItem.bind(this);
  }
  handleClickItem(e, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar;