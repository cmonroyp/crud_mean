import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

//Service 
import { AlumnoService } from '../../services/alumno.service';
import { FacultadService } from '../../services/facultad.service';

//model 
import { Alumno } from '../../models/alumno';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  public titulo:string;
  public alumno: Alumno;
  public facultades: Array<any>=[];
  public token;
  public message: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _alumnoService: AlumnoService,
              private _facultadService: FacultadService,
              private _location: Location) {

          this.titulo = 'Editar Alumno';
          this.alumno = new Alumno('','','','','');
               }
      
  ngOnInit() {
    this.token = this._alumnoService.getToken();
    this.get_alumno();
    this.getFacultades();
  }

  get_alumno(){
    this._route.params.forEach((params: Params)=>{
        let id = params['id'];
        
        this._alumnoService.editar_alumno(id,this.token)
            .subscribe((res:any)=>{
              //console.log(res.alumno)
              this.alumno = res.alumno;         
            })
    })
  }

  getFacultades(){
    this._facultadService.getFacultades()
        .subscribe((res:any)=>{
          this.facultades = res.facultades
          //console.log('facultades',this.facultades);
        },
        (err)=>console.log('Error en la Consulta', err))
  }

  onSubmit(){
    console.log('Datos Alumno',this.alumno)

    this._location.back();
  }

}
