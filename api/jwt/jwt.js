'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'hash_api';

//el parametro alumno es el que se envia desde el metodo de loginAlumno del controlador.
exports.createToken = (alumno)=>{

    var payload ={
        sub: alumno._id,
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        email: alumno.email,
        iat: moment().unix(),//se crea con la fecha y hora del sistema.
        exp: moment().add(30,'days').unix//30 dias para expiracion del token.
    };

    return jwt.encode(payload,secret);//codifica la informacion.
}