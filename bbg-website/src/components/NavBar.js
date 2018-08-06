import React, { Component } from 'react';
import './NavBar.css';
import Button from '@material-ui/core/Button';

class NavBar extends Component
{
  render ()
  {
    return (
      <div className="NavBar">

        <div className="ButtonCluster">
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Home
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              UNTITLED
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Hot Squat
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Turner
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              SYU
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Gallery
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              About Us
            </Button>
          </div>
          <div className="NavButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;