'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AsignaturaSchema = Schema({
    nombre: String,
    facultad: {type: Schema.ObjectId, ref: 'Facultad'}//relacionada con el schema de la facultad.
});

module.exports = mongoose.model('Asignatura',AsignaturaSchema);