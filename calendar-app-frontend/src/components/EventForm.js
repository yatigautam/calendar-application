import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EventForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    pictureUrl: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventData.title || !eventData.date) {
      alert("Please fill in the required fields!");
      return;
    }
    // Submit form logic
    console.log(eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Title:
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Event Date:
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Picture URL:
        <input
          type="url"
          name="pictureUrl"
          value={eventData.pictureUrl}
          onChange={handleChange}
        />
      </label>
      <label>
        Video URL:
        <input
          type="url"
          name="videoUrl"
          value={eventData.videoUrl}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
