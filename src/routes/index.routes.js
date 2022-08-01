const  {Router} = require('express');
const router = Router();

const { renderIndex, renderAbout,renderNoteFrom, createNewNote,renderEditFrom, 
    updateNote, deleteNote } = require('../controllers/index.controller');

const {isAuthenticated} = require('../helpers/auth');

router.get('/', isAuthenticated,renderIndex);
router.get('/about/:id',isAuthenticated, renderAbout);

router.get('/wod/add',isAuthenticated, renderNoteFrom);
router.post('/notes/new-note',isAuthenticated, createNewNote);

router.get('/wod/edit/:id', renderEditFrom);
router.put('/notes/edit/:id', updateNote);

router.delete('/notes/delete/:id', deleteNote);


module.exports = router;