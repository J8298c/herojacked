import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      user: '',
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
        <Menu pointing secondary>
          <Menu.Item 
            name='home' active={activeItem === 'home'} onClick={this.handleItemClick}
          /> 
          <Menu.Item 
            name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item 
              name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}
            />   
          </Menu.Menu> 
        </Menu>
      </div>
    );
  }
}

export default NavBar;
