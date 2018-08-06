import React, { Component } from 'react';
import './SocialMediaButtons.css';
import { CardMedia } from '../../node_modules/@material-ui/core';
import facebookImg from "../assets/facebook-icon.png"
import twitterImg from "../assets/twitter-icon.png"
import tumblrImg from "../assets/tumblr-icon.png"
import emialImg from "../assets/email-icon.png"


class SocialMediaButtons extends Component
{
  // This is kinda ugly, just wanted to try it out idk what we should acrtually do
  render ()
  {
    // Margins are also linking to the other place so idk about that
    return (
      <div className="ButtonHolders">
        <a href="google.com" target="_blank"> <CardMedia className="Button" image={facebookImg} title="Facebook"/> </a>
        <a href="google.com" target="_blank"> <CardMedia className="Button" image={twitterImg} title="Twitter"/>  </a>    
        <a href="google.com" target="_blank"> <CardMedia className="Button" image={tumblrImg} title="Tumblr"/>   </a>   
        <a href="google.com" target="_blank"> <CardMedia className="Button" image={emialImg} title="Email"/>    </a>  
      </div>
    );
  }
}

export default SocialMediaButtons;