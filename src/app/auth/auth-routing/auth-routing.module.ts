import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from '../logreg/logreg.component';

const authRoutes: Routes = [
  { path: 'logreg', component: LogregComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
