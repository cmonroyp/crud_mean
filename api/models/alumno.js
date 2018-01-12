'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;//esquema de la base de datos.

var AlumnoSchema = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    facultad: {type: Schema.ObjectId,ref:'Facultades'} 
});

module.exports = mongoose.model('Alumno',AlumnoSchema);