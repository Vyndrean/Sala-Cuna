const express = require('express')
const api = express.Router()
const userController = require('../controllers/userController')


api.post('/user', userController.createUser)
api.get('/users', userController.getUsers)
api.get('/userbyID/:id', userController.getUser)
api.delete('/deleteUser/:id', userController.deleteUser)

module.exports = api;