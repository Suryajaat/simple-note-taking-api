const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

router.post('/notes', noteController.createNote);
router.get('/notes/:id', noteController.getNoteById);
router.get('/notes', noteController.queryNotesByTitle);
router.put('/notes/:id', noteController.updateNote);

module.exports = router;
