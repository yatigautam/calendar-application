// src/components/EventItem.js
import React from 'react';

const EventItem = ({ event, onEdit, onDelete }) => {
  return (
    <li>
      <h2>{event.title}</h2>
      <p>{event.date} | {event.time}</p>
      <p>{event.description}</p>
      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </li>
  );
};

export default EventItem;
