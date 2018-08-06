import React, { Component } from 'react';
import NavBar from "./components/NavBar.js"
import Header from "./components/Header.js"
import MainPageCard from "./components/MainPageCards.js"
import SocialMediaButtons from './components/SocialMediaButtons.js';
import './App.css';


class App extends Component 
{ 
  render() 
  {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <MainPageCard />
        <SocialMediaButtons />
      </div>
    );
  }
}

export default App;
