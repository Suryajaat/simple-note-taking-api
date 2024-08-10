const Note = require('../models/noteModel');

// Create Note
exports.createNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      body: req.body.body
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch Note by ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Query Notes by Title Substring
exports.queryNotesByTitle = async (req, res) => {
  try {
    const substring = req.query.title || '';
    const notes = await Note.find({ title: new RegExp(substring, 'i') });
    res.json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Note
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    
    note.title = req.body.title || note.title;
    note.body = req.body.body || note.body;
    await note.save();
    
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
