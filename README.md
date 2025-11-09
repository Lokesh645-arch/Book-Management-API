# Book Management API

A RESTful API for managing a book collection built with Node.js, Express, and MySQL.

## Features

- Get all books
- Get a specific book by ID
- Add a new book
- Update an existing book
- Delete a book

## Technologies Used

- Node.js
- Express.js
- MySQL
- mysql2 package

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/Lokesh645-arch/Book-Management-API.git
   cd Book-Management-API
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up MySQL database:
   - Ensure MySQL server is running
   - Execute the SQL script in `mysql_project.sql` to create the database and table

4. Start the server:
   ```
   npm start
   ```

The API will be running on http://localhost:3000

## API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a book by ID
- `POST /api/books` - Add a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## Usage

Use tools like Postman or curl to interact with the API endpoints.
