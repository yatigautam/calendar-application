import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch events from backend
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get("http://localhost:3000/api/events");
        setEvents(response.data); // Assuming the backend returns an array of event objects
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  // Handle date click to show event creation popup
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowPopup(true);
  };

  // Handle event creation form submission
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const pictureUrl = e.target.pictureUrl.value || "";
    const videoUrl = e.target.videoUrl.value || "";

    try {
      await axios.post("http://localhost:3000/api/events", {
        title,
        date: selectedDate,
        pictureUrl,
        videoUrl,
      });
      setShowPopup(false);
      window.location.reload(); // Refresh to show the new event
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />

      {showPopup && (
        <div className="popup">
          <form onSubmit={handleCreateEvent}>
            <h3>Create Event for {selectedDate}</h3>
            <input name="title" placeholder="Event Title" required />
            <input name="pictureUrl" placeholder="Picture URL (optional)" />
            <input name="videoUrl" placeholder="Video URL (optional)" />
            <button type="submit">Create Event</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Calendar;
