const express = require('express');
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Route 1
router.get('/fetchallnotes', fetchuser, async(req, res)=>{
    try {
        const notes = await Notes.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internet Server Error');
    }
})

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
        const note = new Note([
            title, description, tag, user: req.user.id
        ])
        const savedNote = await note.save()
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internet Server Error');
    }
})