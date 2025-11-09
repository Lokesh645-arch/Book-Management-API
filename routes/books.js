const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');

router.get('/', async (req, res) => {
  const db = req.app.get('db');
  try {
    const books = await bookModel.getAllBooks(db);
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const db = req.app.get('db');
  const { title, author, year } = req.body;
  try {
    const book = await bookModel.createBook(db, { title, author, year });
    res.status(201).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const db = req.app.get('db');
  try {
    const book = await bookModel.getBookById(db, req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const db = req.app.get('db');
  const { title, author, year } = req.body;
  try {
    const updated = await bookModel.updateBook(db, req.params.id, { title, author, year });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const db = req.app.get('db');
  try {
    await bookModel.deleteBook(db, req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
