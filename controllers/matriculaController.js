const Matricula = require('../models/matricula')
const apoderado = require('../models/apoderado');
const parvulo = require('../models/parvulo');

const addMatricula = (req, res) => {
    let newMatricula = new Matricula;
    newMatricula.apoderado = req.body.idApoderado;
    newMatricula.apoderado2 = req.body.idApoderado2;
    newMatricula.apoderado3 = req.body.idApoderado3;
    newMatricula.parvulo = req.body.idParvulo;

    newMatricula.save((err, matricula) => {
        if(err){
            return res.status(400).send({message: "Error al crear la matricula"});
        }
        return res.status(200).send({newMatricula: matricula});
    })
}

const getMatriculas = (req, res) => {
    Matricula.find()
    .populate('apoderado')
    .populate('apoderado2')
    .populate('apoderado3')
    .populate('parvulo')
    .exec((err, matriculado) => {
        res.status(200).send({matriculado})
    })
}

const delMatricula = (req ,res) => {
    var matriculaID = req.params.id
    Matricula.findByIdAndDelete(matriculaID, (err, matricula) => {
        if(err){
            return res.status(400).send({message: "Error al eliminar el perfil"})
        }
        return res.status(200).send({matricula})
    })
}

module.exports = {
    addMatricula,
    getMatriculas,
    delMatricula
}