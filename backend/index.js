const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = 9001;

dotenv.config()
app.use(express.json())
app.use(cors());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

connectToMongo();

app.listen(port, ()=>{
    console.log(`Example listening at port https://localhost:${port}`);
})