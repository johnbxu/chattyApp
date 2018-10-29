import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span>{this.props.userCount} Users online</span>
      </nav>
    );
  }
}
export default NavBar;
