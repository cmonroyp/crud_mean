'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'hash_api';

exports.ensureAuth = function(req, res, next){

	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}

	var token = req.headers.authorization.replace(/['"]+/g, '');//reemplaza las comillas dobles("") al inicio del token.

	try{
		var payload = jwt.decode(token, secret);//recibe el token y lo decodifica, con la clave que se genero.

		if(payload.exp <= moment().unix()){
			return res.status(401).send({message: 'El token ha expirado'});
		}
	}catch(ex){
		//console.log(ex);
		return res.status(404).send({message: 'Token no válido'});
	}

	req.alumno = payload;

	next();
};