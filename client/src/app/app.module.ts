import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//Forms 
import {FormsModule} from '@angular/forms';

//Componentes 
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

//Materialize CSS 
import { MaterializeModule } from 'angular2-materialize';
import { MenuComponent } from './menu/menu.component';

//Rutas 
import { APP_ROUTING } from './services/app.routing';
//Services 
import { FacultadService } from './services/facultad.service';
import { AlumnoService } from './services/alumno.service';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateStudentComponent,
    AdministracionComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    APP_ROUTING
  ],
  providers: [FacultadService,AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
