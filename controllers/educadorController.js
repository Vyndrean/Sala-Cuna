const Educador = require('../models/educador')

const addEducador = (req, res) => {
    let newEducador = new Educador
    newEducador.name = req.body.name
    newEducador.rut = req.body.rut
    newEducador.phone = req.body.phone
    newEducador.mail = req.body.mail
    newEducador.address = req.body.address

    newEducador.save((err, educador) => {
        if(err){
            return res.status(400).send({message: "Error al crear el perfil"})
        }
        return res.status(200).send(educador)
    })
}

const getEducadores = (req, res) => {
    Educador.find({}, (err, educador) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar los perfiles"})
        }
        return res.status(200).send(educador)
    })
}

const getEducador = (req, res) => {
    let educadorID = req.params.id;
    Educador.findById(educadorID, (err, educador) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar el perfil"})
        }
        return res.status(200).send(educador)
    })
}

const delEducador = (req ,res) => {
    let educadorID = req.params.id;
    Educador.findByIdAndDelete(educadorID, (err, educador) => {
        if(err){
            return res.status(400).send({message: "Error al elimiar el perfiles"})
        }
        return res.status(200).send(educador)
    })
}

const editEducador = (req, res) => {
    let educadorID = req.params.id
    let name = req.body.name
    let rut = req.body.rut
    let phone = req.body.phone
    let mail = req.body.mail
    let address = req.body.address
    Educador.findByIdAndUpdate(educadorID, {
        name: name,
        rut: rut,
        phone: phone,
        mail: mail,
        address: address
    }, (err, educador) => {
        if(err){
            return res.status(400).send({message: "Error al editar el perfil"})
        }
        return res.status(200).send({educador})
    })
}

module.exports = {
    addEducador,
    getEducadores,
    getEducador,
    delEducador,
    editEducador
}