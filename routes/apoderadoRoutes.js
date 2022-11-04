const express = require('express')
const api = express.Router()
const apoderadoController = require('../controllers/apoderadoController')

api.post('/apoderado', apoderadoController.addApoderado)
api.get('/apoderados', apoderadoController.getApoderados)
api.get('/apoderado/find/:id', apoderadoController.getApoderado)
api.delete('/apoderado/delete/:id', apoderadoController.delApoderado)
api.put('/apoderado/edit/:id', apoderadoController.modApoderado)

module.exports = api;