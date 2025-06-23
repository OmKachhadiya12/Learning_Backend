const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',() => {
    console.log('Connected');
});

db.on('disconnected',() => {
    console.log('Disconnected');
});

db.on('error',(err) => {
    console.log('Error Occured',err)
});

module.exports = db;