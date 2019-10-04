import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogregComponent } from './logreg/logreg.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';



@NgModule({
  declarations: [LogregComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
