const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParvuloSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    rut:{
        type: String,
        require: true
    },
    dateOfBirth:{
        type: Date,
        require: true
    },
    /*image:{
        type: String
    }*/
})

module.exports = mongoose.model('parvulo', ParvuloSchema);