import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

//Api
import { AppSettings } from './api.settings';
//model 
import { Alumno } from '../models/alumno';



@Injectable()
export class AlumnoService {

    public token;
    public identity;
    public url: string;
    public welcome:string;

    constructor(private _http: HttpClient){
        this.url = AppSettings.API_ENDPOIND;
    }

    signUp(alumno_to_login, gethash?){

        if(gethash){
            alumno_to_login.gethash = gethash;  
        }

        let body = JSON.stringify(alumno_to_login);
        let headers = new HttpHeaders({'Content-Type':'application/json'});

         return this._http.post(`${this.url}login`,body,{headers});
    }

    addAlumno(alumno){
        let body = JSON.stringify(alumno);
        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this._http.post(`${this.url}agregar_alumno`,body,{headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity !='undefined'){
            this.identity = identity;
        }
        else{
            this.identity = null;
        }
        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');
        if(token !='undefined'){
            this.token = token;
        }
        else{
            this.token = null;
        }
        return this.token;
    }

    removeToken(){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
    }

    cargar_alumnos(page){

        let headers = new HttpHeaders({'Content-Type':'application/json',
                                      'Authorization': this.token});
           // headers.append('Parameter', params);
      return  this._http.get(`${this.url}get_alumnos/${page}`,{headers});
    }

    editar_alumno(alumno_id,token){

        let headers = new HttpHeaders({'Content-Type':'application/json',
                                      'Authorization': token});
        return this._http.get(`${this.url}get_alumno/${alumno_id}`, {headers});
    }

    update_alumno(alumno_to_update,token){

        let params = JSON.stringify(alumno_to_update);
        let headers = new HttpHeaders({'Content-Type':'application/json',
                                        'Authorization':token});

        return this._http.put(`${this.url}update_alumno/${alumno_to_update._id}`,params,{headers});
    }

    delete_alumno(alumno_to_id, token){

        let headers = new HttpHeaders ({'Content-Type':'application/json', 
                                        'Authorization':token});
        return this._http.delete(`${this.url}delete_alumno/${alumno_to_id}`, {headers});
    }
}