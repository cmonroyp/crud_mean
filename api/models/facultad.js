'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacultadSchema = Schema({
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model('Facultades',FacultadSchema);