const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
], (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let user = User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: 'Sorry a user with this email already exits'});
    }
    user = User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })
    res.json(user);
})

module.exports = router;