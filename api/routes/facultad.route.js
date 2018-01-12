'use strict'

var express = require('express');
var md_auth = require('../middlewares/authenticated');
var FacultadController = require('../controllers/facultad.controller');

var api = express.Router();

api.get('/get_facultad/:id',md_auth.ensureAuth,FacultadController.getFacultad);
api.get('/get_facultades',md_auth.ensureAuth,FacultadController.getFacultades);
api.post('/agregar_facultad',md_auth.ensureAuth,FacultadController.addFacultad);

module.exports = api;