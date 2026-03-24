# ✈️ UniFlights

UniFlights is a student-focused flight comparison web application that allows users to search flights, filter results, save flights, and access travel options with a clean interface.  
The project is built using React, Node.js, Express, PostgreSQL, and JWT authentication.

This project was developed as part of a university Software Engineering / Web Development assignment.

---

## 🚀 Features

- Flight search (One-way / Round-trip)
- Filter by price and airline
- Save flights
- User login & registration
- JWT authentication
- PostgreSQL database
- REST API backend
- React frontend
- Mobile APK build using Capacitor
- Deployable on Vercel + Render

---

## 🛠️ Tech Stack

Frontend:
- React
- CSS
- Axios
- React Router

Backend:
- Node.js
- Express.js
- PostgreSQL
- JWT
- bcrypt

Mobile:
- Capacitor
- Android Studio

Deployment:
- Vercel (frontend)
- Render (backend)

---

## 📁 Project Structure
UNIFLIGHTS-PROJECT
├── uniflights-backend
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── app.js
│   ├── config.js
│   ├── package.json
│   └── .env
│
├── uniflights-frontend
│   ├── public
│   ├── src
│   ├── assets
│   ├── package.json
│   ├── capacitor.config.ts
│   └── android
│
└── README.md

---

## Installation Guide

### Clone Repository
git clone https://github.com/yourusername/uniflights-project.git

---

### Install Frontend
cd uniflights-frontend
npm install
npm start
Frontend runs on:
http://localhost:3000

---

### Install Backend
cd uniflights-backend
npm install
node app.js
Backend runs on:
http://localhost:8000

---

## Environment Variables

Create a file named `.env` inside the backend folder.
PORT=8000
JWT_SECRET=mysecretkey
DATABASE_URL=your_postgres_connection
Example PostgreSQL URL:
postgres://user:password@localhost:5433/uniflights

---

## Database

Tables used in PostgreSQL:

- users
- bookings
- universities

Example table:
CREATE TABLE users (
id SERIAL PRIMARY KEY,
email TEXT,
password TEXT
);

---

## Authentication

- JWT tokens used for login
- Password hashed with bcrypt
- Protected routes with middleware

Example header:
Authorization: Bearer TOKEN

---

## Android APK Build

Steps:
cd uniflights-frontend

npm run build

npm install @capacitor/core @capacitor/cli
npm install @capacitor/android

npx cap init
npx cap add android
npx cap copy
npx cap open android

In Android Studio:
Build → Build APK(s)
APK location:
android/app/build/outputs/apk/debug/app-debug.apk

---

## Deployment

Frontend deployed using Vercel  
Backend deployed using Render

Steps:

1. Push project to GitHub
2. Deploy frontend on Vercel
3. Deploy backend on Render
4. Update API URL in
src/api.js

---

## Technologies Used

| Technology | Purpose |
|----------|----------|
| React | Frontend |
| Node.js | Backend |
| Express | API |
| PostgreSQL | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| Axios | API calls |
| Capacitor | Mobile build |
| Android Studio | APK |
| Vercel | Frontend hosting |
| Render | Backend hosting |

---

## Educational Purpose

This project was developed for academic submission to demonstrate:

- Full stack development
- API integration
- Database usage
- Authentication
- Deployment
- Mobile packaging

The flight data may be mocked or provided by public APIs.
No real payment system is included.

---

## Author

Divyansh Chawla  
BSc Computer Science / Software Engineering Project  
UniFlights – University Assignment

---

## Notes

- This project is for educational use only
- Booking redirects to provider websites
- No real airline booking system included
