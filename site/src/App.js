import logo from './assets/c1logo.png';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="capital-one-logo" />
        <Home/>
      </header>
    </div>
  );
}

export default App;
