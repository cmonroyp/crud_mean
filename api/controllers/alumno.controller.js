'use strict'

var bcrypt = require('bcrypt-nodejs');//encripta la contraseña en la bd.
//Servicio jwt
var jwt = require('../jwt/jwt');
//modelo
var Alumno = require('../models/alumno');
//Paginacion 
var mongoosePaginate = require('mongoose-pagination');

function getAlumno(req, res){
    let alumno_id = req.params.id;
    Alumno.findById(alumno_id,(err,alumno)=>{
        if(err){
            res.status(500).send({message:'Error en el servidor'});
        }
        else{
            if(!alumno){
                res.status(404).send({message:'No existe el alumno!.'});
            }
            else{
                res.status(200).send({alumno: alumno});
            }   
        }
    })
}

function getAlumnos(req, res){

    let page = req.params.page || 1;//en caso que no venga la pagina muestra la primera.
    let limitPage = 4;//registros que se mostrara por pagina.

    Alumno.find({}).sort('nombre')
          .populate('facultad').paginate(page,limitPage,(err,alumnos,totalAlumnos)=>{
 
            if(err){
                res.status(500).send({message:'Error en la peticion con el servidor!.'});
            }
            else
            {
                if(!alumnos){
                    res.status(404).send({message:'No se encontraron Alumnos!.'});  
                }
                else{
                  return  res.status(200).send({
                                            alumnos:alumnos,
                                            total_alumnos: totalAlumnos,
                                            count_alumnos: alumnos.length
                                        })
                }
            }
        });
}

function addAlumno(req,res){
    let alumno = new Alumno();
    let params = req.body;
    
    alumno.nombre = params.nombre;
    alumno.apellido = params.apellido;
    alumno.email = params.email;
    alumno.facultad = params.facultad;

    if(params.password){
        bcrypt.hash(alumno.password,null,null,(err,hash)=>{
            alumno.password = hash;

            if(alumno.nombre != null && alumno.apellido != null, alumno.email != null){
                alumno.save((err,alumnoStored)=>{
                    if(err){
                        res.status(500).send({message:'Error con el Servidor!.'});
                    }
                    else{
                        if(!alumnoStored){
                            res.status(404).send({message:'No se ha almacenado el usuario, contacte con el Administrador!.'});
                        }
                        else{
                            res.status(200).send({alumno: alumnoStored});
                        }
                    }
                })
            }
            else{
                res.status(200).send({message:'Todos los campos son obligatorios!.'});
            }

        });

    }
    else{
        res.status(200).send({message:'La contraseña es obligatoria!.'});
    }
}

function loginAlumno(req,res){

    let params = req.body;

    let email = params.email;
    let password = params.password;

    //Buscamos primero el usuario para generale el token.
    Alumno.findOne({email: email.toLowerCase()},(err,findAlumno)=>{
        if(err){
            res.status(500).send({message:'Error con el Servidor'});
        }
        else{
            if(!findAlumno){
                res.status(404).send({message:'Usuario no encontrado!.'});
            }
            else{
                //Comparo el password enviado, con el del usuario encontrado
                bcrypt.compare(password,findAlumno.password,(err,check)=>{
                    if(check){
                        //si viene gethash = true desde la url se genera un nuevo token.
                        if(params.gethash){
                            //se devuelve un token al alumno logueado en la aplicacion.
                            res.status(200).send({
                                token: jwt.createToken(findAlumno)
                            });                            
                        }
                        else{
                            res.status(200).send({findAlumno});
                        }
                    }
                    else{
                        res.status(404).send({message: 'El alumno no ha podido loguearse'});
                    }
                })
            }
        }
    })
}

function updateAlumno(req,res){

    let alumno_id = req.params.id;
    let update = req.body;

    //compara que el id del usuario, sea el mismo que se guardo en el token.
    // if(alumno_id != req.alumno.sub){
    //     return res.status(500).send({message: 'No tienes permiso para actualizar este alumno'});
    // }

    Alumno.findByIdAndUpdate(alumno_id, update, (err,alumnoUpdated)=>{

        if(err){
            res.status(500).send({message:'Error con el Serividor!.'})
        }
        else{
            if(!alumnoUpdated){
                res.status(404).send({message:'El usuario a actualizar no existe!.'});
            }
            else{
                res.status(200).send(
                    {      
                     alumno: alumnoUpdated,
                     alumno_new: update
                    }
                );
            }
        }
    })
}

function delete_alumno(req,res){
    
    let alumno_id = req.params.id;
    
    Alumno.findByIdAndRemove(alumno_id,(err,deleteAlmn)=>{
        if(err){
            res.status(500).send({message:'Error con el Servidor!.'});
        }
        else{
            if(!deleteAlmn){
                res.status(404).send({message:'Alumno no Eliminado!.'});
            }
            else{
                res.status(200).send({alumno: deleteAlmn});
            }
        }
    })
}

module.exports = {
    getAlumno,
    getAlumnos,
    addAlumno,
    loginAlumno,
    updateAlumno,
    delete_alumno
}
