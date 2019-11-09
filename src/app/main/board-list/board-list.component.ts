import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
// import { Board } from 'src/app/classes/board/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [BoardService]
})
export class BoardListComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoards()
  }

}
