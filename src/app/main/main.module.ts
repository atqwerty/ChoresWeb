import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { AuthGuard } from '../services/authGuardService/auth.guard';
import { BoardListComponent } from './board-list/board-list.component';



@NgModule({
  declarations: [MainComponent, BoardListComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [AuthGuard]
})
export class MainModule { }