const express = require('express')
const api = express.Router()
const upload = require('../libs/storage')
const parvuloController = require('../controllers/parvuloController.js')

api.post('/parvulo', parvuloController.addParvulo)

module.exports = api