const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const userschema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    team:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("users", userschema);