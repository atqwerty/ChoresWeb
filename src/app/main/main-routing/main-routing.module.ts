import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from '../main/main.component';
import { AuthGuard } from 'src/app/services/authGuardService/auth.guard';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
