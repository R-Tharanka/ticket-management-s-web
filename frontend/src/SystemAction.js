import React, { useState } from 'react';

function SystemActions() {
  const [status, setStatus] = useState('');

  const handleAction = async (action) => {
    try {
      const response = await fetch(`http://localhost:8080/ticketing/${action}`, {
        method: 'POST',
      });
      const data = await response.text();
      setStatus(data);
    } catch (error) {
      alert('Error performing action.');
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch('http://localhost:8080/ticketing/status', {
        method: 'GET',
      });
      const data = await response.text();
      setStatus(data);
    } catch (error) {
      alert('Error fetching status.');
    }
  };

  return (
    <div>
      <h2>System Actions</h2>
      <button onClick={() => handleAction('start')}>Start Ticketing System</button>
      <button onClick={fetchStatus}>View Ticket Pool Status</button>
      <button onClick={() => alert('Logs are not implemented yet.')}>View Logs</button>
      <button onClick={() => alert('Adding vendors/customers is not implemented yet.')}>
        Add Vendors or Customers
      </button>
      <button onClick={() => handleAction('stop')}>Stop System</button>
      <button onClick={() => handleAction('exit')}>Exit</button>
      <div>
        <h3>System Status:</h3>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default SystemActions;

