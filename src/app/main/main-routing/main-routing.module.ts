import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from '../main/main.component';
import { AuthGuard } from 'src/app/services/authGuardService/auth.guard';
import { BoardComponent } from '../board/board.component';
import { NotFoundPageComponent } from '../../shared/not-found-page/not-found-page.component'

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard], pathMatch: 'full', data: { animation: 'Main' } },
  { path: 'main/board/:id', component: BoardComponent, canActivate: [AuthGuard], data: { animation: 'Board' } },
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
