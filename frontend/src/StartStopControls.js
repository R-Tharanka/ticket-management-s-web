import React from 'react';

function StartStopControls() {
  const handleStart = async () => {
    try {
      const response = await fetch('http://localhost:8080/ticketing/start');
      const data = await response.text();
      alert(data);
    } catch (error) {
      alert('Failed to start system!');
    }
  };

  const handleStop = async () => {
    try {
      const response = await fetch('http://localhost:8080/ticketing/stop');
      const data = await response.text();
      alert(data);
    } catch (error) {
      alert('Failed to stop system!');
    }
  };

  return (
    <div className="start-stop-container">
      <h2 className="controls-header">System Controls</h2>
      <div className="button-container">
        <button className="start-stop start" onClick={handleStart}>
          Start
        </button>
        <button className="start-stop stop" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default StartStopControls;
