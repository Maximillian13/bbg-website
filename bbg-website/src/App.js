import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"
import Header from "./components/Header.js"
import PersonCard from './components/PersonCard.js';
import SocialMediaButtons from './components/SocialMediaButtons';


class App extends Component 
{ 
  render() 
  {
    return (
      <div className="App">
        <NavBar />
        <Header />
        {/*Want to pass in properties but cant get it to work becasue 
           Materail UI is wack. Maybe you can figure it out...*/}
        <PersonCard name="Kevin" />
        <PersonCard name="Maximillian"/>
        <PersonCard name="Matthew"/>
        
        <SocialMediaButtons />
      </div>
    );
  }
}

export default App;
