const  {Router} = require('express');
const router = Router();

const { renderIndex, renderAbout,renderNoteFrom, createNewNote,renderEditFrom, 
    updateNote, deleteNote } = require('../controllers/index.controller');



router.get('/',renderIndex);
router.get('/about/:id', renderAbout);

router.get('/wod/add', renderNoteFrom);
router.post('/notes/new-note', createNewNote);

router.get('/wod/edit/:id', renderEditFrom);
router.put('/notes/edit/:id', updateNote);

router.delete('/notes/delete/:id', deleteNote);


module.exports = router;