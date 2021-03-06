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
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material'
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
import { StatusDialogComponent } from './status-dialog/status-dialog.component';
import { TaskInfoDialogComponent } from './task-info-dialog/task-info-dialog.component';
import { GobackButtonHoverDirective } from './gobackButtonHover/goback-button-hover.directive';
import { NewBoardComponentComponent } from './new-board-component/new-board-component.component';



@NgModule({
  declarations: [MainComponent, BoardListComponent, BoardComponent, TaskDialogComponent, StatusDialogComponent, TaskInfoDialogComponent, GobackButtonHoverDirective, NewBoardComponentComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard, HttpClientModule],
  entryComponents: [TaskDialogComponent, StatusDialogComponent, TaskInfoDialogComponent, NewBoardComponentComponent]
})
export class MainModule { }
