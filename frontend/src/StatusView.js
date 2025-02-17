import React, { useState } from 'react';

function StatusView() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
    setLoading(true); // Show loading indicator
    try {
      const response = await fetch('http://localhost:8080/ticketing/status');
      const data = await response.text();
      setStatus(data);
    } catch (error) {
      setStatus('Error fetching status.');
    } finally {
      setLoading(false); // Hide loading indicator once the fetch is complete
    }
  };

  return (
    <div className="status-view-container">
      <h2 className="status-header">Ticket Pool Status</h2>
      <button className="view-status-btn" onClick={fetchStatus} disabled={loading}>
        {loading ? 'Loading...' : 'View Status'}
      </button>
      <div className="status-message">
        <p>{status}</p>
      </div>
    </div>
  );
}

export default StatusView;
