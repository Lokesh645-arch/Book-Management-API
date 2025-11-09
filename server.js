const express = require('express');
const mysql = require('mysql2/promise');
const booksRouter = require('./routes/books');

const app = express();
app.use(express.json());

// ✅ MySQL connection
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Simma@2005',
  database: 'bookdb',
};

(async () => {
  const db = await mysql.createConnection(dbConfig);
  console.log('Connected to MySQL');
  app.set('db', db);
})();

// ✅ Use the router
app.use('/books', booksRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

