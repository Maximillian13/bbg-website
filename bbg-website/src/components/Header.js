import React, { Component } from 'react';
import headerImage from "../assets/header.png"
import './Header.css';


class Header extends Component
{
  render ()
  {
    return (
      <div className="Header">
        <img src={headerImage} alt="Bean Boy Games Header" height="200px" />
      </div>
    );
  }
}

export default Header;