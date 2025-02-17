import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketPoolInfo = () => {
  const [poolSize, setPoolSize] = useState(0);
  const [ticketsSold, setTicketsSold] = useState(0);

  useEffect(() => {
    axios.get('/api/tickets/poolSize').then((response) => {
      setPoolSize(response.data.poolSize);
      setTicketsSold(response.data.ticketsSold);
    });
  }, []);

  return (
    <div>
      <h2>Ticket Pool Info</h2>
      <p>Tickets in Pool: {poolSize}</p>
      <p>Tickets Sold: {ticketsSold}</p>
    </div>
  );
};

export default TicketPoolInfo;
