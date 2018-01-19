import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Service 
import { AlumnoService } from '../services/alumno.service';

//model 
import { Alumno } from './../models/alumno';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public alumno: Alumno;
  public identity;
  public getToken;

  constructor(private _alumnoService: AlumnoService,
              private _route: Router,
              ) {
    this.alumno = new Alumno('','','','','');
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.alumno);

    this._alumnoService.signUp(this.alumno)
        .subscribe((res:any)=>{
          //console.log(res.findAlumno);
          this.identity = res.findAlumno;
          if(!res.findAlumno){
            console.log('El usuario no se ha logueado correctamente!.');
          }
          else{
            //guarda usuario en el localstorage
            localStorage.setItem('identity',JSON.stringify(this.identity));
            
            this._alumnoService.signUp(this.alumno,true)
                .subscribe((res:any)=>{
                  this.getToken = res.token;
                  //console.log('token generado',this.getToken)
                  if(this.getToken.length <= 0){
                    console.log('El token no se genero correctamente!.');
                  }
                  else{
                    //se guarda el token en el storage
                    localStorage.setItem('token',this.getToken);
                    //Redireccionamos
                    this._route.navigate(['/administracion']);
                  }
                })
          }
        },
       (err)=>console.log('Error en la autenticacion', err));
  }
}
