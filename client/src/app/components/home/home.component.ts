import { Component, OnInit } from '@angular/core';

//Service 
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identity;

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit() {
    this.identity = this._alumnoService.getIdentity();
  }

}
