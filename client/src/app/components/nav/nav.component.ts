import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Service 
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',

})
export class NavComponent implements OnInit {

  public identity;

  constructor(private _alumnoService: AlumnoService,
              private _router: Router) { }

  ngOnInit() {
    this.identity = this._alumnoService.getIdentity();
  }

  logout(){
    this._alumnoService.removeToken();
    this._router.navigate(['/']);//quitamos cualquier ruta visitada.
  }

}
