import React from 'react';
import motivation from './motivation1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Good Day!</h1>
        <img src={motivation} alt="logo" />
      </header>
    </div>
  );
}

export default App;
