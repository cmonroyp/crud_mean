import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  public next_page;
  public prev_page;

  constructor(private _alumnoService: AlumnoService,
              private _route: ActivatedRoute) { }

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
   
    // this._route.params.forEach((params:Params)=>{
    //   let page = +params['page'];
    //   console.log('pageenviada',page)
    //   if(!page){
    //     page = 1;
    //   }
    //   else{
    //     this.next_page = page+1;
    //     this.prev_page = page-1;

    //     if(this.prev_page == 0){
    //       this.prev_page = 1;
    //     }
    //   }

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
