# MERN CRUD Application with Clean Architecture

This is a full-stack MERN (MongoDB, Express, React, Node.js) CRUD application built using **Clean Architecture**. The project is divided into two main parts:

1. **Backend**: Built with Node.js, Express, and MongoDB, using TypeScript for type safety.
2. **Frontend**: Built with React, TypeScript, and Tailwind CSS for styling.

The application allows you to perform CRUD (Create, Read, Update, Delete) operations on users.

---

## Features

- **Backend**:

  - RESTful API for managing users.
  - Clean Architecture with separation of concerns (Domain, Application, Infrastructure, Presentation layers).
  - MongoDB for data storage.
  - TypeScript for type safety and better developer experience.

- **Frontend**:
  - React for building the user interface.
  - TypeScript for type safety.
  - Tailwind CSS for styling.
  - Clean Architecture with separation of concerns (Domain, Application, Infrastructure, Presentation layers).

---

## Project Structure

### Backend

```md
backend/
├── src/
│ ├── domain/ # Domain layer (entities and interfaces)
│ ├── application/ # Application layer (use cases)
│ ├── infrastructure/ # Infrastructure layer (database, server)
│ ├── presentation/ # Presentation layer (controllers, routes)
│ ├── server.ts # Entry point for the backend
├── .env # Environment variables
├── package.json # Backend dependencies
├── tsconfig.json # TypeScript configuration'
```

### Frontend

```md
frontend/
├── src/
│ ├── domain/ # Domain layer (entities and interfaces)
│ ├── application/ # Application layer (use cases)
│ ├── infrastructure/ # Infrastructure layer (API services)
│ ├── presentation/ # Presentation layer (components, pages)
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point for the frontend
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts # Vite configuration
├── package.json # Frontend dependencies
├── tsconfig.json # TypeScript configuration
```

---

## Technologies Used

- **Backend**:

  - Node.js
  - Express
  - MongoDB
  - Mongoose (ODM for MongoDB)
  - TypeScript
  - CORS (Cross-Origin Resource Sharing)
  - Dotenv (Environment variables)

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - Axios (HTTP client)
  - Vite (Build tool)

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-crud-clean-architecture.git
cd mern-crud-clean-architecture
```

---

### 2. Backend Setup

#### 1. Navigate to the backend folder:

```bash
cd backend
```

#### 2. Install dependencies:

```bash
npm install
```

#### 3. Create a .env file in the backend folder and add the following:

```bash
MONGODB_URI=mongodb://localhost:27017/mern-crud
PORT=5000
```

#### 4. Start the backend server:

```bash
npm run dev
```

The backend will run on http://localhost:5000.

---

### 3. Frontend Setup

#### 1. Navigate to the frontend folder:

```bash
cd ../frontend
```

#### 2. Install dependencies:

```bash
npm install
```

#### 3. Start the frontend development server:

```bash
npm run dev
```

The frontend will run on http://localhost:5173.

---
