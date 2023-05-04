const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(express.json())
app.use(cors();)

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

connectToMongo();

app.listen(port, ()=>{
    console.log(`Example listening at port https://localhost:${port}`);
})