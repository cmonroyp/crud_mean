import { Component, OnInit } from '@angular/core';

//Service 
import { AlumnoService } from '../../services/alumno.service';
//model 
import { Alumno } from '../../models/alumno';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  public identity: Alumno;
  public token;

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit() {

    //cargamos localStorage
   this.identity = this._alumnoService.getIdentity();
   this.token =  this._alumnoService.getToken();
   console.log(this.identity.nombre);
   console.log(this.token);
  }

}
