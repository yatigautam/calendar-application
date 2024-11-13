// EventForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventForm = ({ event, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    attachments: []
  });

  // Pre-fill the form if editing an event
  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        date: event.date,
        time: event.time,
        description: event.description,
        attachments: event.attachments
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Move this to the start of the function
    
    if (event) {
      // Update event
      await axios.put(`http://localhost:3000/events/${event.id}`, formData);
    } else {
      // Create event
      await axios.post('http://localhost:3000/events', formData); // Use formData here
    }
    onSave(); // Call onSave to refresh the event list
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Event Title"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Event Description"
      />
      <input
        type="text"
        name="attachments"
        value={formData.attachments}
        onChange={handleChange}
        placeholder="Attachments (comma separated)"
      />
      <button type="submit">{event ? 'Update Event' : 'Create Event'}</button>
    </form>
  );
};

export default EventForm;
