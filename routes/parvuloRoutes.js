const express = require('express')
const api = express.Router()
const parvuloController = require('../controllers/parvuloController')


api.post('/parvulo', parvuloController.addParvulo)
api.get('/parvulos', parvuloController.getParvulos)
api.get('/parvulo/find/:id', parvuloController.getParvulo)
api.delete('/parvulo/delete/:id', parvuloController.delParvulo)
api.put('/parvulo/edit/:id', parvuloController.modParvulo)

module.exports = api;