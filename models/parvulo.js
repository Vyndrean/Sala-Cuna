const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const parvuloSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    rut:{
        type:String,
        required: true
    },
    birthday:{
        type:Date,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    gender:{
        type: String,
        enum: ['H','M'],
        required: true
    }
    /*
    image:{
        type: String
    },
    representative:{
        type: Schema.ObjectId,
        ref: "apoderado"
    },*/
})

module.exports = mongoose.model('parvulo', parvuloSchema)