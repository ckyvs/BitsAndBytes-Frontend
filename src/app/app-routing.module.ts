import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { VacancyComponent } from './vacancy/vacancy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'vacancies', component:VacancyComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
