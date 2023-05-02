const express = require('express');
const connectToMongo = require('./db');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello world');
})

connectToMongo();

app.listen(port, ()=>{
    console.log(`Example listening at port https://localhost:${port}`);
})