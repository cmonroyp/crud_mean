import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//model 
import { Alumno } from './../models/alumno';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public alumno: Alumno;

  constructor() {
    this.alumno = new Alumno('','','','','');
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.alumno);
  }
}
