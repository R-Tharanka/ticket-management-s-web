import React, { useState } from 'react';

function ConfigurationForm() {
  const [formData, setFormData] = useState({
    totalTickets: '',
    releaseRate: '',
    retrievalRate: '',
    maxCapacity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/ticketing/configure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('The configuration has been successfully updated.');
      } else {
        alert('Unable to save the configuration! Please try again.');
      }
    } catch (error) {
      alert('Unable to connect to the server! Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">System Configuration</h2>
      <form className="config-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Total Tickets:</label>
          <input
            type="number"
            name="totalTickets"
            value={formData.totalTickets}
            onChange={handleChange}
            required
            placeholder="Enter total number of tickets"
          />
        </div>
        <div className="input-group">
          <label>Ticket Release Rate (seconds):</label>
          <input
            type="number"
            name="releaseRate"
            value={formData.releaseRate}
            onChange={handleChange}
            required
            placeholder="Enter release rate in seconds"
          />
        </div>
        <div className="input-group">
          <label>Customer Retrieval Rate (seconds):</label>
          <input
            type="number"
            name="retrievalRate"
            value={formData.retrievalRate}
            onChange={handleChange}
            required
            placeholder="Enter retrieval rate in seconds"
          />
        </div>
        <div className="input-group">
          <label>Maximum Ticket Pool Capacity:</label>
          <input
            type="number"
            name="maxCapacity"
            value={formData.maxCapacity}
            onChange={handleChange}
            required
            placeholder="Enter max capacity"
          />
        </div>
        <button type="submit" className="submit-button">
          Save Configuration
        </button>
      </form>
    </div>
  );
}

export default ConfigurationForm;
