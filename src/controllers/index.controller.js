const indexCtrl = {};
const Note =  require('../models/Note');

indexCtrl.renderIndex =async(req,res)=>{
    const notes = await Note.find().lean();
    res.render('index',{ notes });
}

indexCtrl.renderAbout = async (req,res)=>{
    const notes =await Note.findById(req.params.id).lean();
    res.render('about', { notes });
} 

/////////////////

indexCtrl.renderNoteFrom = (req, res) =>{
    res.render('notes/new-notes');
}

indexCtrl.createNewNote = async (req, res) =>{
    const { title, image,description,color } = req.body;
    const newNote = Note({title,image,description,color});
    await newNote.save();
    res.redirect('/');
}


indexCtrl.renderEditFrom = async(req, res)=>{
    const note =await Note.findById(req.params.id).lean();
    res.render('notes/edit-note',{ note });
}

indexCtrl.updateNote = async(req, res)=>{
    const {title, image,description,color}= req.body;
    await Note.findByIdAndUpdate(req.params.id,{title,image,description,color});
    res.redirect('/');
}

indexCtrl.deleteNote = async (req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/');
}


module.exports = indexCtrl;