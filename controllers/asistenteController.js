const Asistente = require('../models/asistente')

const addAsistente = (req, res) => {
    let newAsistente = new Asistente
    newAsistente.name = req.body.name
    newAsistente.rut = req.body.rut
    newAsistente.phone = req.body.phone
    newAsistente.mail = req.body.mail
    newAsistente.address = req.body.address

    newAsistente.save((err, asistente) => {
        if(err){
            return res.status(400).send({message: "Error al crear el perfil"})
        }
        return res.status(200).send(asistente)
    })
}

const getAsistentes = (req, res) => {
    Asistente.find({}, (err, asistente) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar los perfiles"})
        }
        return res.status(200).send(asistente)
    })
}

const getAsistente = (req, res) => {
    let asistenteID = req.params.id
    Asistente.findById(asistenteID, (err, asistente) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar el perfil"})
        }
        return res.status(200).send(asistente)
    })
}

const delAsistente = (req, res) => {
    let asistenteID = req.params.id
    Asistente.findByIdAndDelete(asistenteID, (err, asistente) => {
        if(err){
            return res.status(400).send({message: "Error al eliminar el perfil"})
        }
        return res.status(200).send({asistente})
    })
}

const modAsistente = (req, res) => {
    let asistenteID = req.params.id
    let name = req.body.name
    let rut = req.body.rut
    let phone = req.body.phone
    let mail = req.body.mail
    let address = req.body.address
    Asistente.findByIdAndUpdate(asistenteID, {
        name: name,
        rut: rut,
        phone: phone,
        mail: mail,
        address: address
    }, (err, asistente) => {
        if(err){
            return res.status(400).send({message: "Error al editar el perfil"})
        }
        return res.status(200).send({asistente})
    })
}

module.exports = {
    addAsistente,
    getAsistentes,
    getAsistente,
    delAsistente,
    modAsistente


}