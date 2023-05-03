const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/inotebook', {useNewURLParser: true,
// useUnifiedTopology: true});
const mongoURI = "mongodb://localhost:27017/inotebook";

const db = mongoose.connection;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;