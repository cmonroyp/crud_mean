'use strict'

var express = require('express');
//controlador 
var AlumnoController = require('../controllers/alumno.controller');
//middleware de autenticacion md_auth
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

api.get('/get_alumno/:id',md_auth.ensureAuth,AlumnoController.getAlumno);
api.get('/get_alumnos/:page?',md_auth.ensureAuth,AlumnoController.getAlumnos);
api.post('/agregar_alumno',AlumnoController.addAlumno);
api.post('/login',AlumnoController.loginAlumno);
api.put('/update_alumno/:id',md_auth.ensureAuth,AlumnoController.updateAlumno);
api.delete('/delete_alumno/:id',md_auth.ensureAuth,AlumnoController.delete_alumno);

module.exports = api;