import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/route-animation';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/services/board/board.service';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component'
import { HttpClient } from 'selenium-webdriver/http';
import { TaskService } from '../../services/taskService/task.service'
import { TaskInfoDialogComponent } from '../task-info-dialog/task-info-dialog.component';

export interface StatusDialogData {
  newStatus: string
}

export interface TaskDialogData {
  title: string,
  description: string
}

export interface TaskInfoDialogData {
  title: string,
  description: string,
}

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
  boardId = 0
  title: string
  description: string
  canCreateTask: boolean = false
  canCreateStatus: boolean = false
  newStatus: string

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private boardService: BoardService,
    private dataFlowService: DataFlowService,
    public dialog: MatDialog,
    private router: Router
  ) { 
    this.dataFlowService.passBoardData$.subscribe((data) => {
      this.tasks = data
      this.dataFlowService.passStatusesData$.subscribe((data) => {
        this.statuses = data
        console.log(data)
      })
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardId = params.id
      this.boardService.getBoard(params.id)
      this.boardService.getStatuses(params.id)
    })
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let droppedTask = this.tasks.find(obj => {
        return obj.title === event.item.element.nativeElement.innerText
      })
      if (event.container.data) {
        droppedTask.status = event.container.data.status
        this.updateStatus(event.container.data.id, droppedTask.ID)
      }
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  openCreateTaskDialog(status): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      height: 'fit-content',
      width: '400px',
      data: {title: this.title, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.title || result.description) {
        this.canCreateTask = true // TODO: check if there are duplicates
        this.title = result.title;
        this.description = result.description;
        this.createTask(status)
      }
    });
  }

  openCreateStatusDialog(): void {
    const dialogRef = this.dialog.open(StatusDialogComponent, {
      height: 'fit-content',
      width: '400px',
      data: {newStatus: this.newStatus}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result.newStatus) {
        this.canCreateStatus = true // TODO: check if there are duplicates
        this.newStatus = result.newStatus
        this.createStatus()
      }
    })
  }

  createTask(status) {
    this.taskService.addTask(this.title, this.description, status.id, this.boardId)
        .subscribe(
          data => {
            this.tasks.push(data)
            console.log(this.tasks)
          },
          error => {
            console.log(error)
          }
        )
  }

  createStatus() {
    this.boardService.addStatus(this.newStatus)
        .subscribe(
          data => {
            this.statuses.push(data)
          },
          error => {
            console.log(error)
          }
        )
  }

  updateStatus(statusID, taskID) {
    console.log(statusID + " " + taskID)
    this.taskService.updateStatus(statusID, taskID, this.boardId)
        .subscribe(
          data => {
            console.log(data)
          },
          error => {
            console.log(error)
          }
        )
  }

  openTaskInfo(task): void {
    const dialogRef = this.dialog.open(TaskInfoDialogComponent, {
      height: 'fit-content',
      width: '400px',
      data: {taskTitle: task.title, taskDescription: task.description}
    })
  }

  goBack() {
    this.router.navigate(['main'])
  }
}
