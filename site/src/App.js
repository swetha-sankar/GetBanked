import logo from './assets/c1logo.png';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import TestApi from './components/TestApi'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="capital-one-logo" />
        <TestApi/>
      </header>
    </div>
  );
}

export default App;
