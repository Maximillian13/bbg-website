import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"
import Header from "./components/Header.js"
import PersonCard from './components/PersonCard.js';


class App extends Component 
{ 
  render() 
  {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <PersonCard />
      </div>
    );
  }
}

export default App;
