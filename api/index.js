'use strict' // para poder meter nuevos standares de javascript.

var mongoose = require('mongoose');//cargamos modulo que permite la conexion a la BD.
var app = require('./app');// cargamos la configuracion de express.
var port = process.env.port || 3977; //pto por el que deseo que escuche el localhost.

mongoose.Promise = global.Promise;//no permite visualizar errores que confunden al programador, talves en futuras versiones lo corrijan.
mongoose.connect('mongodb://localhost:27017/crud_mean',{useMongoClient:true},(err,resp)=>{

    if(err){
        console.log('Error en la Conexion  a la BD: ',err);
    }
    else
    {
        console.log('Conectado a la BD');
        app.listen(port,()=>{
            console.log('Api Rest Escuchando desde http://localhost:' + port);
        })
    }

})
