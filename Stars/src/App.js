// src/App.js
import React from 'react';
import './App.css';
import PlanetList from './components/PlanetList';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <PlanetList />
    </div>
  );
}

export default App;
