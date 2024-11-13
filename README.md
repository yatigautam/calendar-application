# Calendar Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/yourusername/calendar-app.svg)](https://travis-ci.org/yourusername/calendar-app)

## 🚀 Welcome to the Calendar Application!

This is a full-stack calendar application built with **React** (Frontend) and **Node.js** (Backend). It allows users to manage their events, display them on a calendar UI, and create new events by clicking on dates. Users can also attach images and videos to events, making it more interactive and feature-rich.

---

## 🌟 Features

- **Interactive Calendar UI**: Beautiful calendar view to display your events using **React Calendar**.
- **CRUD Event Operations**: Create, Read, Update, and Delete events with ease.
- **Real-Time Event Display**: Fetch and display events dynamically from the backend.
- **Add Attachments**: Attach pictures and videos to events.
- **Responsive Design**: Mobile-friendly design to manage events on the go.
  
---

## 💻 Tech Stack

- **Frontend**: React, React Calendar, Axios, HTML, CSS
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **API**: RESTful API to manage events

---

## 🚧 Project Setup

To get the project running locally on your machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/calendar-app.git
cd calendar-app
```
### 2. Install Dependencies

**Backend**
Navigate to the calendar-app-backend directory and install backend dependencies:

```bash
cd calendar-app-backend
npm install
```

**Frontend**
Navigate to the calendar-app-frontend directory and install frontend dependencies:

```bash
cd ../calendar-app-frontend
npm install
```
---

### 3. Configure Environment Variables
Make sure to set up your **MongoDB** connection and other environment variables in the .env file for the backend. Here’s an example:

```bash
MONGO_URI=mongodb://localhost:27017/calendarapp
PORT=5000
```
---

### 🏃‍♀️ Running the Application

To run the backend and frontend simultaneously, open two terminal windows:

**1. Start the Backend:** Navigate to the calendar-app-backend directory and run:

```bash
node app.js
```
The server will start on http://localhost:5000.

**2. Start the Frontend:** Navigate to the calendar-app-frontend directory and run:

```bash
npm start
```
The frontend will be available at http://localhost:3000

---

### 📝 How to Use
**1. View Events:** Open the calendar UI to see your scheduled events.
**2. Create Events:** Click on any date to create a new event. You can add a title, description, and attach pictures or videos.
**3. Edit Events:** Click on an event to modify its details.
**4. Delete Events:** Remove events directly from the calendar by selecting them and clicking the delete button.

---

### 🎯 Roadmap
**Add Authentication:** Implement JWT-based authentication for user management.
**Event Notifications:** Integrate email or push notifications for upcoming events.
**Mobile App:** Develop a mobile version of the calendar app.

---

### 📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

### 👥 Contributing
We welcome contributions! If you'd like to contribute to this project, feel free to fork the repo and submit a pull request with your changes.

1.Fork the repo.
2.Create a new branch (git checkout -b feature-name).
3.Make your changes.
4.Commit your changes (git commit -am 'Add feature').
5.Push to the branch (git push origin feature-name).
6.Create a new Pull Request.
---
