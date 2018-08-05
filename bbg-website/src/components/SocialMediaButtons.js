import React, { Component } from 'react';
import './SocialMediaButtons.css';
import Button from '@material-ui/core/Button';

class SocialMediaButtons extends Component
{
  // This is kinda ugly, just wanted to try it out idk what we should acrtually do
  render ()
  {
    return (
      <div className="SocBar">
        <div className="SocButtonCluster">
          <div className="SocButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Facebook
            </Button>
          </div>
          <div className="SocButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Twitter
            </Button>
          </div>
          <div className="SocButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Tumblr
            </Button>
          </div>
          <div className="SocButton">
            <Button variant="outlined" size="large" fullWidth="true">
              Email
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMediaButtons;