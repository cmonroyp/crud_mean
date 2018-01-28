import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

//Home 
import { AppComponent } from '../app.component';

//Student 
import { CreateStudentComponent } from '../components/create-student/create-student.component';
//Menu 
import { MenuComponent } from '../menu/menu.component';
//Administracion
import { AdministracionComponent } from '../components/administracion/administracion.component';
//Editar
import { EditStudentComponent } from '../components/edit-student/edit-student.component';


const APP_ROUTE: Routes =[
    {path:'', component: MenuComponent},
    {path:'crear-alumno', component: CreateStudentComponent},
    {path:'administracion', component: AdministracionComponent},
    {path:'administracion/:page', component: AdministracionComponent},
    {path:'edit_student/:id', component: EditStudentComponent}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);