import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

//Api
import { AppSettings } from './api.settings';
//Model 
import { Alumno } from '../models/alumno';



@Injectable()
export class AlumnoService {
    public url: string;
    constructor(private _http: HttpClient){
        this.url = AppSettings.API_ENDPOIND;
    }

    addAlumno(alumno:Alumno){
        let body = JSON.stringify(alumno);
        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this._http.post(`${this.url}agregar_alumno`,body,{headers});
    }
}