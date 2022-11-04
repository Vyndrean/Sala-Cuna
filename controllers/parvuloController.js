const parvulo = require('../models/parvulo')


const addParvulo = (req, res) => {
    let newParvulo = new Parvulo
    newParvulo = req.body.name
    newParvulo = req.body.rut
    newParvulo = req.body.dateOfBirth
    //newParvulo = req.body.image

    newParvulo.save((err, parvulo) => {
        if(err){
            return res.status(400).send({message: "Error al crear el parvulo"});
        }
        return res.status(200).send(parvulo);
    })
}

module.exports = {
    addParvulo
}