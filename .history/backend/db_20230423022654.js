const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27107', {useNewURLParser: true,
useUnifiedTopology: true});

const db = mongoose.connection;

const connectToMongo = ()=>{
    db.on('open', ()=>{{
        console.log('Now we are connected');
    }})
}

module.exports = connectToMongo;