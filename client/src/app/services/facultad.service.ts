import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

//EndPoind
import { AppSettings } from './api.settings';


@Injectable()
export class FacultadService {

  public url: string;
  constructor(private _http: HttpClient) { 

    this.url = AppSettings.API_ENDPOIND
  }

  getFacultades(){

    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(`${this.url}get_facultades`, {headers});
  }

}
