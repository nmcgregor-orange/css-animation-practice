import React from 'react';
import './App.css';
import bruce from './image/bruce.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="animated infinite shake">
        Be Like Water
      </div>
      <div className="kick makeRotate makefly">
        <img src={bruce} alt="broosly" />
      </div>
      </header>
    </div>
  );
}

export default App;
