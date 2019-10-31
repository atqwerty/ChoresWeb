import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'logreg', component: AuthComponent, pathMatch: 'full' },
  { path: '', component: AuthComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
