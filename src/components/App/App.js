import React, { Component } from 'react';
import AnimalList from '../AnimalList/AnimalList'
import NewAnimalForm from '../NewAnimalForm/NewAnimalForm'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
          <h1>Zoo Animals</h1>
        </header>
        <br />
        <br />
        <div className ="animal-body">
          <div className="animal-list">
            <h3>List of Species and Class</h3>
            <AnimalList /></div>
          <div className="animal-form">
            <h3>Add New Animal:</h3><NewAnimalForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
