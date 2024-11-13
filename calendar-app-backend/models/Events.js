// calendar-app-backend/models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  pictureUrl: { type: String, required: false },
  videoUrl: { type: String, required: false },
});

module.exports = mongoose.model("Event", eventSchema);
