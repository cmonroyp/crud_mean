import { Component, OnInit } from '@angular/core';

//Service 
import { AlumnoService } from '../../services/alumno.service';
//model 
import { Alumno } from '../../models/alumno';

declare var Materialize: any;

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  public identity: Alumno;
  public token;
  public alumnos: Alumno[]= [];

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit() {

    //cargamos localStorage
   this.identity = this._alumnoService.getIdentity();
   this.token =  this._alumnoService.getToken();
   Materialize.toast('Bienvenido: ' + this.identity.nombre, 3000, 'green rounded')
   console.log(this.identity.nombre);
   console.log(this.token);

   //Cargar Alumnos 
   setTimeout(() => {      
     this.cargar_datos();
    }, 3500);
  }

  cargar_datos(){
   
    this._alumnoService.cargar_alumnos()
        .subscribe((res:any)=>{
          this.alumnos = res.alumnos;
          console.log('Alumnos',res.alumnos)
        },
        (err)=>{
          console.log('Error en la Conuslta!.',err);
          Materialize.toast('Error en la Consulta', 3000, 'red rounded')
        })
  }

}
