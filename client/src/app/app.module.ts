import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
