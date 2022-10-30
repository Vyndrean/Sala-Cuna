const User = require('../models/user')

const createUser = (req, res) => {

    let newUser = new User;
    newUser.name = req.body.name
    newUser.email = req.body.email
    newUser.password = req.body.password

    newUser.save((err, user) =>{
        if(err){
            return res.status(400).send({message: "Error al crear el usuario"});
        }
        return res.status(201).send(user);
    })
}

const getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            return res.status(400).send({message: "Error al obtener al usuario"})
        }
        return res.status(200).send(users)
    })
}

const getUser = (req, res) => {
    let userID = req.params.id

    User.findById(userID, (err, user) => {
        if(err){
            return res.status(400).send({message: "Error el usuario no existe"})
        }
        return res.status(200).send({user})
    })
}

const deleteUser = (req, res) => {
    let userID = req.params.id

    User.findByIdAndDelete(userID, (err, user) => {
        if(err){
            return res.status(400).send({message: "Error el usuario no existe"})
        }
        return res.status(200).send({user})
    })
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser
}