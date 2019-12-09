import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import NewBoardDialogData from '../board-list/board-list.component'

@Component({
  selector: 'app-new-board-component',
  templateUrl: './new-board-component.component.html',
  styleUrls: ['./new-board-component.component.css']
})
export class NewBoardComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewBoardComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewBoardDialogData
  )
  {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
