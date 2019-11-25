import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/route-animation';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/services/board/board.service';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [slideInAnimation]
})
export class BoardComponent implements OnInit {
  todo = []
  done = []
  statuses = []

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private dataFlowService: DataFlowService
  ) { 
    this.dataFlowService.passBoardData$.subscribe((data) => {
      console.log(data)
      this.todo = data
    })
    this.dataFlowService.passStatusesData$.subscribe((data) => {
      console.log(data)
      this.statuses = data
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
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
