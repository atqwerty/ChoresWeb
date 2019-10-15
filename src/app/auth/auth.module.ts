import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogregComponent } from './logreg/logreg.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [LogregComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
