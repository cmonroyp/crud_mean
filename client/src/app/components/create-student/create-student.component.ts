import { Component, OnInit } from '@angular/core';

//model 
import { Alumno } from './../../models/alumno';

declare let $:any;
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public alumno: Alumno;
  public titulo:string;
  constructor() {

    this.titulo = 'Crear Alumno'
    this.alumno = new Alumno('','','','','');
   }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }

  onSubmit(){
    console.log(this.alumno);
  }

}
