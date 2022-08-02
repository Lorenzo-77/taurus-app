"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/index.controller'),
    renderIndex = _require2.renderIndex,
    renderAbout = _require2.renderAbout,
    renderNoteFrom = _require2.renderNoteFrom,
    createNewNote = _require2.createNewNote,
    renderEditFrom = _require2.renderEditFrom,
    updateNote = _require2.updateNote,
    deleteNote = _require2.deleteNote;

router.get('/', renderIndex);
router.get('/about/:id', renderAbout);
router.get('/wod/add', renderNoteFrom);
router.post('/notes/new-note', createNewNote);
router.get('/wod/edit/:id', renderEditFrom);
router.put('/notes/edit/:id', updateNote);
router["delete"]('/notes/delete/:id', deleteNote);
module.exports = router;