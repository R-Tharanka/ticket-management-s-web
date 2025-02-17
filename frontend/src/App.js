import React from 'react';
import tscImage from './asset/tsc.jpg'; 

import ConfigureSystem from './ConfigureSystem';
import StartStopControls from './StartStopControls';
import StatusView from './StatusView';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={tscImage} alt="Header Image" className="header-image" />
      </header>

      <div className="header-txt">
        <h1>Ticketing System</h1>
      </div>

      <main className="main-content">
        <ConfigureSystem />
        <div className="controls-status-container">
          <StartStopControls />
          <StatusView />
        </div>
      </main>
    </div>
  );
}

export default App;
