const Apoderado = require('../models/apoderado')
const parvulo = require('../models/parvulo')

const addApoderado = (req, res) => {

    let newApoderado = new Apoderado;
    newApoderado.name = req.body.name
    newApoderado.rut = req.body.rut
    //newApoderado.parvulo = req.body.idParvulo
    newApoderado.phone = req.body.phone
    newApoderado.birthday = req.body.birthday
    newApoderado.mail = req.body.mail
    newApoderado.address = req.body.address

    newApoderado.save((err, apoderado) => {
        if(err){
            return res.status(400).send({message: "Error al crear el perfil"})
        }
        return res.status(200).send(apoderado)
    })
}

const getApoderados = (req, res) => {
    Apoderado.find({}, (err, apoderados) => {
        if(err){
            return res.status(400).send({message: "Error al obtener los perfiles"})
        }
        return res.status(200).send(apoderados)
    })
}

const getApoderado = (req, res) => {
    let apoderadoID = req.params.id
    Apoderado.findById(apoderadoID, (err, apoderado) => {
        if(err){
            return res.status(400).send({message: "Error al encontrar el perfil"})
        }
        return res.status(200).send({apoderado})
    })
}

const delApoderado = (req, res) => {
    let apoderadoID = req.params.id
    Apoderado.findByIdAndDelete(apoderadoID, (err, apoderado) => {
        if(err){
            return res.status(400).send({message: "Error al eliminar el perfil"})
        }
        return res.status(200).send({apoderado})
    })
}

const modApoderado = (req, res) => {
    let apoderadoID = req.params.id
    let name = req.body.name
    let rut = req.body.rut
    //let parvulo = req.body.parvulo
    let phone = req.body.phone
    let birthday = req.body.birthday
    let mail = req.body.mail
    let address = req.body.address
    Apoderado.findByIdAndUpdate(apoderadoID, {
        name: name,
        rut: rut,
        parvulo: parvulo,
        phone: phone,
        birthday: birthday,
        mail: mail,
        address: address
    }, (err, apoderado) => {
        if(err){
            return res.status(400).send({message: "Error al editar el perfil"})
        }
        return res.status(200).send({apoderado})
    })
}

module.exports = {
    addApoderado,
    getApoderados,
    getApoderado,
    delApoderado,
    modApoderado
}