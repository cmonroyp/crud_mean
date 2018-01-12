'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacultadSchema = Schema({
    nombre: String,
    descripcion: String,
    alumno: {type: Schema.ObjectId, ref: 'Alumno'}
});

module.exports = mongoose.model('Facultad',FacultadSchema);