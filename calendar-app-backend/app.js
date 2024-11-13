const express = require("express");
const mongoose = require("mongoose");
const eventsRoute = require("./routes/events");

const app = express();
app.use(express.json());

// Connect to MongoDB (adjust the URI as needed)
mongoose.connect("mongodb://localhost:27017/calendar-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use events route under `/api`
app.use("/api", eventsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log("Current working directory:", __dirname);
