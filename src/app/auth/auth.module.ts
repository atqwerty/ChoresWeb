import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogregComponent } from './logreg/logreg.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LogregComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
