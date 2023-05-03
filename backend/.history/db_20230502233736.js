const mongoose = require('mongoose');
mongoose.connect('')

const db = mongoose.connection;

const connectToMongo = ()=>{
    db.on('open', ()=>{
        console.log('Now we are connected');
    })
}

module.exports = connectToMongo;