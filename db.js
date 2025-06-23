const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/Hotel';

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