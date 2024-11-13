// routes/events.js
const express = require("express");
const router = express.Router();
const Event = require("../models/Event"); // Reference to the Event model

// Get all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).send("Error fetching events");
  }
});

// Create a new event
router.post("/events", async (req, res) => {
  const { title, date, pictureUrl, videoUrl } = req.body;
  try {
    const newEvent = new Event({ title, date, pictureUrl, videoUrl });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).send("Error creating event");
  }
});

module.exports = router;
console.log("Events route loaded");
