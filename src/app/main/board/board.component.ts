import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/route-animation';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/services/board/board.service';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [slideInAnimation]
})
export class BoardComponent implements OnInit {
  tasks = []
  tasksSorted = []
  statuses = []
  title: string
  description: string
  canCreateTask: boolean = false
  canCreateStatus: boolean = false
  newStatus: string

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private dataFlowService: DataFlowService,
    public dialog: MatDialog
  ) { 
    this.dataFlowService.passBoardData$.subscribe((data) => {
      this.tasks = data
      this.dataFlowService.passStatusesData$.subscribe((data) => {
        this.statuses = data
      })
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardService.getBoard(params.id)
      this.boardService.getStatuses(params.id)
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let droppedTask = this.tasks.find(obj => {
        return obj.title === event.item.element.nativeElement.innerText
      })
      droppedTask.status = event.container.data
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  openCreateTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      height: 'fit-content',
      width: '400px',
      data: {title: this.title, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.title || result.description) {
        this.canCreate = true // TODO: check if there are duplicates
        this.title = result.title;
        this.description = result.description;
      }
    });
  }

  openCreateStatusDialog(): void {
    const dialogRef = this.dialog.open(StatusDialogComponent, {
      height: 'fit-content',
      width: '400px',
      data: {status: this.status}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (status) {
        this.canCreateStatus = true
        this.newStatus = result.status
        console.log(this.newStatus)
      }
    })
  }
}
