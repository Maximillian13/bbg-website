import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"
import Header from "./components/Header.js"
import GenericCard from './components/GenericCard.js';
import SocialMediaButtons from './components/SocialMediaButtons';


class App extends Component 
{ 
  render() 
  {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <GenericCard name="UNTITLED" desc="Post Code FF: Initializing startup sequence of: UNTITLED. Puzzle course loading… 
        Logic test loading… Discovery test loading… Loading complete. Please contact local administrator to begin the training course."/>
        <GenericCard name="Hot Squat" desc="Welcome to Flynn Fitness, home of the Hot Squat. Prepare to undergo a rigorous test to not only your legs,
         but also your will to do as many squats as you possibly can. Compete against your friends, yourself, and the world to get the highest squat count."/>
        <GenericCard name="Turner" desc="Turner is a 2D platformer puzzle game set in an insane asylum where you take the role of Turner,
         a man with a troubled past and an unstable state of mind. Complete over 500 levels by rotating the world around you."/>
        <GenericCard name="Stealar Year: Unknown" desc="Not on steam so who cares"/>
        
        <SocialMediaButtons />
      </div>
    );
  }
}

export default App;
