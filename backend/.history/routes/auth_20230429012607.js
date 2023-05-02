const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { useReducer } = require('react');

const JWT_SECRET = 'bhaveshisagood$boy';

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error: 'Sorry a user with this email already exits'});
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
     user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
    })
    const data = {
        user: {
            id: user.id
        }
    }
    const jwtData = jwt.sign(data, JWT_SECRET);
    console.log(jwtData);

    res.json(user);
})

module.exports = router;