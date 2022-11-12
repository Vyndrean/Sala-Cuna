const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const matriculaSchema = new Schema({
    apoderado:{
        type:Schema.ObjectId,
        ref: "apoderado",
        required: true
    },
    apoderado2:{
        type:Schema.ObjectId,
        ref: "apoderado"
    },
    apoderado3:{
        type:Schema.ObjectId,
        ref: "apoderado"
    },
    parvulo:{
        type: Schema.ObjectId,
        ref: "parvulo",
        required: true
    }
})

module.exports = mongoose.model('matricula', matriculaSchema);