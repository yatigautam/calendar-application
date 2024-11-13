// EventList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './EventForm';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/events')
      .then(response => setEvents(response.data)) // Save the fetched events to the state
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  const handleSubmit = (eventData) => {
    if (editingEvent) {
      // Update existing event
      axios.put(`http://localhost:3000/events/${editingEvent.id}`, eventData)
        .then(response => {
          // Update event list with modified event
          setEvents(events.map(event => event.id === editingEvent.id ? response.data : event));
          setEditingEvent(null); // Reset the editing state
        })
        .catch(error => console.error("Error updating event:", error));
    } else {
      // Create new event
      axios.post('http://localhost:3000/events', eventData)
        .then(response => {
          // Add the newly created event to the event list
          setEvents([...events, response.data]);
        })
        .catch(error => console.error("Error creating event:", error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/events/${id}`)
      .then(() => {
        // Update the events state after deletion
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => console.error("Error deleting event:", error));
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  return (
    <div>
      <h1>Event List</h1>
      <EventForm event={editingEvent} onSave={handleSubmit} />
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <p>{event.title}</p>
            <h3>{event.title}</h3>
            <p>{event.date} - {event.time}</p>
            <p>{event.description}</p>
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
