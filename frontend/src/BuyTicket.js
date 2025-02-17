import React, { useState } from 'react';
import axios from 'axios';

const BuyTicket = () => {
  const [ticket, setTicket] = useState(null);

  const handleBuyTicket = () => {
    axios
      .get('/api/tickets/buy')
      .then((response) => {
        setTicket(response.data);
      })
      .catch(() => {
        setTicket('No tickets available.');
      });
  };

  return (
    <div>
      <h2>Buy Ticket</h2>
      <button onClick={handleBuyTicket}>Buy Ticket</button>
      {ticket && <p>{ticket ? `Bought: ${ticket.eventName}` : 'Failed to buy ticket.'}</p>}
    </div>
  );
};

export default BuyTicket;
