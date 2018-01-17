import { Component, OnInit } from '@angular/core';

//model 
import { Alumno } from './../../models/alumno';

//Service 
import { FacultadService } from '../../services/facultad.service';
import { AlumnoService } from '../../services/alumno.service';


declare let $:any;
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public alumno: Alumno;
  public titulo:string;
  public facultades: Array<any>=[];
  public message: string;

  constructor(private _facultadService: FacultadService,
              private _alumnoService: AlumnoService) {

    this.titulo = 'Crear Alumno'
    this.alumno = new Alumno('','','','','');
   }

   //se inicializa el elemento select
   combo_facultades(){
      $(document).ready(function() {
        $('select').material_select();
      });
   }
   
  ngOnInit() {
    this.getFacultades();
    this.combo_facultades();
  }

  getFacultades(){
    this._facultadService.getFacultades()
        .subscribe((res:any)=>{
          this.facultades = res.facultades
          console.log('facultades',this.facultades);
        },
        (err)=>console.log('Error en la Consulta', err))
  }

  onSubmit(){
    console.log(this.alumno);
   // this.message = this.alumno.email;
    this._alumnoService.addAlumno(this.alumno)
        .subscribe((res:any)=>{
          this.message = res.alumno.email;
        },
        (err)=>console.log(err));
  }

}
