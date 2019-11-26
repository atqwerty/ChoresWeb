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



@NgModule({
  declarations: [MainComponent, BoardListComponent, BoardComponent, TaskDialogComponent],
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
  entryComponents: [TaskDialogComponent]
})
export class MainModule { }
