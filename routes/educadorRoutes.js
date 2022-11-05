const express = require('express')
const api = express.Router()
const educadorController = require('../controllers/educadorController')

api.post('/educador', educadorController.addEducador);
api.get('/educadores', educadorController.getEducadores);
api.get('/educador/find/:id', educadorController.getEducador)
api.delete('/educador/delete/:id', educadorController.delEducador)
api.put('/educador/edit/:id', educadorController.editEducador)

module.exports = api