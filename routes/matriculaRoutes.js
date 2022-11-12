const express = require('express')
const api = express.Router();
const matriculaController = require('../controllers/matriculaController')

api.post('/matricula', matriculaController.addMatricula);
api.get('/matriculas', matriculaController.getMatriculas);
api.delete('/matricula/delete/:id', matriculaController.delMatricula);

module.exports = api;