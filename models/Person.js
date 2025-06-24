const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    age:{
        type:Number
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    },
    addres:{
        type:String
    },
    username:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    }

})

const Person = mongoose.model('Person',personSchema);
module.exports = Person;