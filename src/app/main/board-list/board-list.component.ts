import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';
import { NewBoardComponentComponent } from '../new-board-component/new-board-component.component'
import { MatDialog } from '@angular/material'
// import { Board } from 'src/app/classes/board/board';

export interface NewBoardDialogData {
  title: string,
  description: string
}

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [BoardService]
})
export class BoardListComponent implements OnInit {
  private boards: []
  private title
  private description

  constructor(
    private boardService: BoardService,
    private dataFlowService: DataFlowService,
    private dialog: MatDialog
  ) {
    this.dataFlowService.passBoardsData$.subscribe((data) => {
      this.boards = data
      console.log(this.boards)
    })
  }

  ngOnInit() {
    this.boardService.getBoards()
  }

  newBoard(): void {
    const dialogRef = this.dialog.open(NewBoardComponentComponent, {
      height: 'fit-content',
      width: '400px',
      data: {title: this.title, description: this.description}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.title = result.title
        this.description = result.description
        this.createBoard()
      }
    })
  }

  createBoard() {
    this.boardService.addBoard(this.title, this.description)
        .subscribe(
          data => {
            this.boards.push(data)
          },
          error => {
            console.log(error)
          }
        )
  }
}
