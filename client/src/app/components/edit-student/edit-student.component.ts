import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Service 
import { AlumnoService } from '../../services/alumno.service';
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

  constructor(private _route: ActivatedRoute,
              private _alumnoService: AlumnoService) {

          this.titulo = 'Editar Alumno';
               }
      
  ngOnInit() {

    this.alumno = new Alumno('','','','','');
    this.get_alumno();
  }

  get_alumno(){
    this._route.params.forEach((params: Params)=>{
        let id = params['id'];

        this._alumnoService.editar_alumno(id)
            .subscribe((res:any)=>{
              console.log(res.alumno)
              this.alumno = res.alumno;
            })
    })
  }

}
