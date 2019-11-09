import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { AuthGuard } from '../services/authGuardService/auth.guard';
import { BoardListComponent } from './board-list/board-list.component';
import { HttpClientModule } from '@angular/common/http'
import { BoardService } from '../services/board/board.service';
import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MainComponent, BoardListComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthGuard, HttpClientModule]
})
export class MainModule { }