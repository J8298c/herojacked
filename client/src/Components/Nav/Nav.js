import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    return (
          <div className="navbar">
              <Menu pointing secondary className="navbar">
                  <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                  <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                  <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                  <Menu.Menu position='right'>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                  </Menu.Menu>
              </Menu>
          </div>
    );
  }
}

export default Nav;
