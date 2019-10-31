import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { AuthGuard } from '../services/authGuardService/auth.guard';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [AuthGuard]
})
export class MainModule { }
