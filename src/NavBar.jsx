import React from 'react';

const NavBar = ({userCount}) => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span>{userCount} Users online</span>
    </nav>
  );
}

export default NavBar;
