// models/bookModel.js

// ✅ Get all books
async function getAllBooks(db) {
  const [rows] = await db.execute('SELECT * FROM books');
  return rows;
}

// ✅ Get a single book by ID
async function getBookById(db, id) {
  const [rows] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
  return rows.length > 0 ? rows[0] : null;
}

// ✅ Create a new book
async function createBook(db, { title, author, year }) {
  // Validate input
  if (!title || !author || !year) {
    throw new Error('Missing required fields: title, author, year');
  }

  // Use correct parameter array syntax
  const [result] = await db.execute(
    'INSERT INTO books (title, author, year) VALUES (?, ?, ?)',
    [title, author, parseInt(year)]
  );

  return { id: result.insertId, title, author, year };
}

// ✅ Update a book
async function updateBook(db, id, { title, author, year }) {
  if (!title || !author || !year) {
    throw new Error('Missing required fields: title, author, year');
  }

  await db.execute(
    'UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?',
    [title, author, parseInt(year), id]
  );

  return { id, title, author, year };
}

// ✅ Delete a book
async function deleteBook(db, id) {
  await db.execute('DELETE FROM books WHERE id = ?', [id]);
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
