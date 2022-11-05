const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ApoderadoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rut:{
        type: String,
        required: true
    },
    /*parvulo:{
        relationship:{
            type: String,
            enum: ["Padre","Madre","Tio/a","Hermano/a","Otro"],
            required: true
        },
        name:{
            type: Schema.ObjectId,
            ref: "parvulo"
        }
    },*/
    phone:{
        type: Number,
        required: true
    },/*
    image:{
        type: String
    }*/
    birthday:{
        type: Date,
        required: true
    },
    mail:{
        type: String,
    },
    address:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('apoderado', ApoderadoSchema)