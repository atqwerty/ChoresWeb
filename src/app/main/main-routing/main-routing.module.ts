import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from '../main/main.component';
import { AuthGuard } from 'src/app/services/authGuardService/auth.guard';
import { BoardComponent } from '../board/board.component';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard], pathMatch: 'full' }
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
