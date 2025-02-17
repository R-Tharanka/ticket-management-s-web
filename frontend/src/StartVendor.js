import React, { useState } from 'react';
import axios from 'axios';

const StartVendor = () => {
  const [totalTickets, setTotalTickets] = useState('');
  const [releaseRate, setReleaseRate] = useState('');
  const [message, setMessage] = useState('');

  const handleStartVendor = () => {
    axios
      .post('/api/vendors/start', null, {
        params: {
          totalTickets: totalTickets,
          releaseRate: releaseRate,
        },
      })
      .then((response) => {
        setMessage('Vendor started successfully!');
        setTotalTickets('');
        setReleaseRate('');
      })
      .catch((error) => {
        setMessage('Failed to start vendor.');
      });
  };

  return (
    <div>
      <h2>Start Vendor</h2>
      <div>
        <label>Total Tickets:</label>
        <input
          type="number"
          value={totalTickets}
          onChange={(e) => setTotalTickets(e.target.value)}
        />
      </div>
      <div>
        <label>Release Rate (seconds):</label>
        <input
          type="number"
          value={releaseRate}
          onChange={(e) => setReleaseRate(e.target.value)}
        />
      </div>
      <button onClick={handleStartVendor}>Start Vendor</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StartVendor;
