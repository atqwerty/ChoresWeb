import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogregComponent } from './logreg/logreg.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from '../services/authService/auth.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LogregComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
