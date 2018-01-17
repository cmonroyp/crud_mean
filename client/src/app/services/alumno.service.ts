import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

//Api
import { AppSettings } from './api.settings';




@Injectable()
export class AlumnoService {
    public url: string;
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
}