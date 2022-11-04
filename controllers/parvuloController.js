const Parvulo = require('../models/parvulo')

const addParvulo = (req, res) => {
    let newParvulo = new Parvulo;
    newParvulo.name = req.body.name
    newParvulo.rut = req.body.rut
    newParvulo.birthday = req.body.birthday
    newParvulo.age = req.body.age
    newParvulo.gender = req.body.gender

    newParvulo.save((err, parvulo) => {
        if(err){
            return res.status(400).send({message: "Error al crear el perfil"});
        }
        return res.status(200).send(parvulo)
    })
}

const getParvulos = (req, res) => {
    Parvulo.find({}, (err, parvulos) => {
        if(err){
            return res.status(400).send({message: "Error al obtener los perfiles"})
        }
        return res.status(200).send(parvulos)
    })
}

const getParvulo = (req, res) => {
    let parvuloID = req.params.id
    Parvulo.findById(parvuloID, (err, parvulo) => {
        if(err){
            return res.status(400).send({message: "Error al encontrar el perfil"})
        }
        return res.status(200).send({parvulo})
    })
}

const delParvulo = (req, res) => {
    let parvuloID = req.params.id
    Parvulo.findByIdAndDelete(parvuloID, (err, parvulo) => {
        if(err){
            return res.status(400).send({message: "Error al eliminar el perfil"})
        }
        return res.status(200).send({parvulo})
    })
}

const modParvulo = (req, res) => {
    let parvuloID = req.params.id
    let name = req.body.name
    let rut = req.body.rut
    let birthday = req.body.birthday
    let age = req.body.age
    let gender = req.body.gender
    Parvulo.findByIdAndUpdate(parvuloID, {
        name: name,
        rut: rut,
        birthday: birthday,
        age: age,
        gender: gender
    }, (err, parvulo) => {
        if(err){
            return res.status(400).send({message: "Error al editar el perfil"})
        }
        return res.status(200).send({parvulo})
    })
}

module.exports = {
    addParvulo,
    getParvulos,
    getParvulo,
    delParvulo,
    modParvulo
}