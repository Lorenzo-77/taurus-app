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

var _require3 = require('../helpers/auth'),
    isAuthenticated = _require3.isAuthenticated;

router.get('/', isAuthenticated, renderIndex);
router.get('/about/:id', isAuthenticated, renderAbout);
router.get('/wod/add', isAuthenticated, renderNoteFrom);
router.post('/notes/new-note', isAuthenticated, createNewNote);
router.get('/wod/edit/:id', renderEditFrom);
router.put('/notes/edit/:id', updateNote);
router["delete"]('/notes/delete/:id', deleteNote);
module.exports = router;