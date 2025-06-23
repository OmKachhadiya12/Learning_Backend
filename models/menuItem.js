const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['sour','spicy','bitter'],
        required:true
    },
    price:{
        type:Number,
        default:100,
        required:true,
    },
    ingredients:{
        type:[String],
        required:true
    }
})

const menuItem = mongoose.model('menuItem',menuSchema);
module.exports = menuItem;