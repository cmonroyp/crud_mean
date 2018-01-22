import { Component } from '@angular/core';
 import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;
declare var jQuery: any;
//Service 
import { AlumnoService } from './services/alumno.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _alumnoService: AlumnoService,
              private _router: Router){

  }
  logout(){
    this._alumnoService.removeToken();
    this._router.navigate(['/']);//quitamos cualquier ruta visitada.
  }
}
