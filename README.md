# User Management App

A full-stack application for managing users, built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

- **Backend**: Express.js server interacting with MongoDB using Mongoose.
- **Frontend**: React application built with Vite, styled with Tailwind CSS.

## Features

- Add new users.
- View a list of all users.
- View individual user details.
- Responsive design with Tailwind CSS.
- Form validation using React Hook Form.
- Notifications using React Toastify.

## Prerequisites

- Node.js installed on your machine.
- MongoDB database (local or Atlas).

## Getting Started

Follow the instructions in the respective directories to set up the backend and frontend.

1. [Backend Setup](./Backend/README.md)
2. [Frontend Setup](./Frontend/README.md)

## Overall Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-management-app
   ```

2. Setup Backend:
   ```bash
   cd Backend
   npm install
   # Create a .env file and add your DB_URL and PORT
   npm start # or nodemon server.js
   ```

3. Setup Frontend:
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```
