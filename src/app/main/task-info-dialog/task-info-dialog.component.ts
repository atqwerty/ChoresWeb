import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskInfoDialogData } from '../board/board.component'

@Component({
  selector: 'app-task-info-dialog',
  templateUrl: './task-info-dialog.component.html',
  styleUrls: ['./task-info-dialog.component.css']
})
export class TaskInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TaskInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskInfoDialogData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
