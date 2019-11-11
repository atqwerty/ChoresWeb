import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';
// import { Board } from 'src/app/classes/board/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [BoardService]
})
export class BoardListComponent implements OnInit {
  private boards: []

  constructor(private boardService: BoardService, private dataFlowService: DataFlowService) {
    this.dataFlowService.passBoardsData$.subscribe((data) => {
      this.boards = data
      console.log(this.boards)
    })
  }

  ngOnInit() {
    this.boardService.getBoards()
  }

}
