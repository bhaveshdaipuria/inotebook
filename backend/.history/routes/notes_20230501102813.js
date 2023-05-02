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
        const note = await Note.create({
            title: title,
            description: description,
            tag: tag
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internet Server Error');
    }
})

 module.exports = router;