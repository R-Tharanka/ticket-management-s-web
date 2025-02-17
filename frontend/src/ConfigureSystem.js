import React, { useState } from 'react';

function ConfigureSystem() {
  const [config, setConfig] = useState({
    totalTickets: '',
    releaseRate: '',
    retrievalRate: '',
    maxCapacity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/ticketing/configure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      const data = await response.text();
      alert(data); // Alert the server response
    } catch (error) {
      alert('Unable to save the configuration! Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Configuration Panel</h2>
      <form onSubmit={handleSubmit} className="config-form">
        <div className="input-group">
          <div>
            <label>Total Tickets:</label>
            <input
              type="number"
              name="totalTickets"
              placeholder="Enter Total Tickets"
              value={config.totalTickets}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Release Rate (seconds):</label>
            <input
              type="number"
              name="releaseRate"
              placeholder="Enter Release Rate (s)"
              value={config.releaseRate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Retrieval Rate (seconds):</label>
            <input
              type="number"
              name="retrievalRate"
              placeholder="Enter Retrieval Rate (s)"
              value={config.retrievalRate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Max Capacity:</label>
            <input
              type="number"
              name="maxCapacity"
              placeholder="Enter Max Capacity"
              value={config.maxCapacity}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">Configure</button>
      </form>
    </div>
  );
}

export default ConfigureSystem;
