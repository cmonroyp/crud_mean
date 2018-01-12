'use strict'

//model 
var Facultad = require('../models/facultad');

function getFacultad(req,res){

    let facultad_id = req.params.id;

    Facultad.findById(facultad_id,(err,findFacultad)=>{
        if(err){
            res.status(500).send({message:'Error con el servidor!.'});
        }
        else{
            if(!findFacultad){
                res.status(404).send({message:'Facultad no encontrada!.'});
            }
            else{
                res.status(200).send({facultad: findFacultad});
            }
        }
    })

}

function getFacultades(req,res){

    Facultad.find((err,findFacultades)=>{
        if(err){
            res.status(500).send({message:'Error con el servidor!.'});
        }
        else{
            if(!findFacultades){
                res.status(404).send({message:'Facultad no encontrada!.'});
            }
            else{
                res.status(200).send({facultades: findFacultades});
            }
        }
    })

}

function addFacultad(req,res){

    let facultad = new Facultad();
    let params = req.body;

    facultad.nombre = params.nombre;
    facultad.descripcion = params.descripcion;

    if(facultad.nombre != null){
        facultad.save((err,facultadUpdated)=>{
            if(err){
                res.status(500).send({message:'Error con el servidor!.'});
            }
            else{
                if(!facultadUpdated){
                    res.status(404).send({message:'Facultad no encontrada!.'});
                }
                else{
                    res.status(200).send({facultad: facultadUpdated});
                }
            }
        })
    }
    else{
        res.status(200).send({message:'El nombre es obligatorio!.'});
    }
}

module.exports = {
    getFacultad,
    addFacultad,
    getFacultades
}