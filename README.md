# Simple Note Taking API

## Description

A simple RESTful API for note-taking, built with Node.js and Express. This application allows you to create, fetch, query, and update notes.

## Features

- Create a note
- Fetch a note by ID
- Query notes by title substring
- Update a note

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js] (v18.16.0)
- [MongoDB] (local installation or a cloud service like MongoDB Atlas add path in .env file)

## Setup

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

git clone <repository_url>
cd simple-note-taking-api

### 2. Install Dependencies
- npm install

### 3. Configure Environment Variables
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=3000

### 4. Start the Application and Test
npm test  //for run test
npm start //for Start the Application

### 5. API Endpoints
   ##  1. Create a Note
   Endpoint: POST /api/notes
   Request Body:
   json
   Copy code
   {
   "title": "Note Title",
   "body": "Note Body"
   }
   Response:
   Status Code: 201 Created
   Body: { "_id": "note_id", "title": "Note Title", "body": "Note Body" }

   ##  2. Fetch a Note by ID
   Endpoint: GET /api/notes/:id
   Response:
   Status Code: 200 OK
   Body: { "_id": "note_id", "title": "Note Title", "body": "Note Body" }

   ##  3. Query Notes by Title Substring
   Endpoint: GET /api/notes?title=<substring>
   Response:
   Status Code: 200 OK
   Body: [ { "_id": "note_id", "title": "Note Title", "body": "Note Body" }, ... ]

   ##  4. Update a Note
   Endpoint: PUT /api/notes/:id
   Request Body:
   json
   Copy code
   {
   "title": "Updated Title",
   "body": "Updated Body"
   }
   Response:
   Status Code: 200 OK
   Body: { "_id": "note_id", "title": "Updated Title", "body": "Updated Body" }


```bash

