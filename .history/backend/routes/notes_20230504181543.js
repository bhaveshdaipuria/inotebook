const express = require('express');
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Route 1
router.get('/fetchallnotes', fetchuser, async(req, res)=>{
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internet Server Error');
    }
})

//Router 2: Add a new note using POST
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title ').isLength({min: 3}),
    body('description', 'Description must be atleast 5 characters').isLength({min: 5})
], async(req, res)=>{
    try {
        const {title, description, tag} = req.body;
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        let note = await Note.create({
            title: title, description: description, tag: tag, user: req.user.id 
        })
        // const savedNote = await note.save();
        // res.json(savedNote);
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internet Server Error');
    }
})

//Router 3: Update an existing note
router.post('/updatenote/:id', fetchuser, async(req, res)=>{
    const {title, description, tag} = req.body;
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};
    let note = await Note.findById(req.params.id);
    if(!note){return res.status.apply(404).send('Not Found')};

    if(note.user.toString() !== req.user.id){
        return res.status(401).send('Not Allowed');
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
    res.json({note});
})

// Route 4: Delete an existing note
router.delete('/deletenote/:id', fetchuser, async(req, res)=>{
    try {
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send('Not Found')}
        if(note.user.toString() !== req.user.id){
            return res.status(401).send('Not Allowed');
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", note: note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

 module.exports = router;