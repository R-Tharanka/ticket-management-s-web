import React, { useState } from 'react';
import axios from 'axios';

const AddTicket = () => {
  const [eventName, setEventName] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleAddTicket = () => {
    axios
      .post('/api/tickets/add', {
        ticketId: Date.now(),
        eventName: eventName,
        ticketPrice: ticketPrice,
      })
      .then(() => {
        setMessage('Ticket added successfully!');
        setEventName('');
        setTicketPrice('');
      })
      .catch(() => {
        setMessage('Failed to add ticket.');
      });
  };

  return (
    <div>
      <h2>Add Ticket</h2>
      <div>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div>
        <label>Ticket Price:</label>
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
        />
      </div>
      <button onClick={handleAddTicket}>Add Ticket</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTicket;
