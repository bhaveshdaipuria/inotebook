const express = require('express');
const connectToMongo = require('./db');

const app = express();
const port = 3000;

// app.get('/', (req, res)=>{
//     res.send('Hello world');
// })

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

connectToMongo();

app.listen(port, ()=>{
    console.log(`Example listening at port https://localhost:${port}`);
})