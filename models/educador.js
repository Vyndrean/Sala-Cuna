const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EducadorSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rut:{
        type: String,
        required: true
    },
    /*image:{
        type: String
    },*/
    phone:{
        type: Number,
        required: true
    },
    mail:{
        type: String
    },
    address:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('educador', EducadorSchema)