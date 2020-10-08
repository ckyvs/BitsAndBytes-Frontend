import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { EditVacancyComponent } from './edit-vacancy/edit-vacancy.component';
import { SaveVacancyComponent } from './save-vacancy/save-vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    VacancyComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    EditVacancyComponent,
    SaveVacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
