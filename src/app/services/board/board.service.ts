import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFlowService } from '../dataFlowService/data-flow.service';
import { Router } from '@angular/router';
import { User } from '../../classes/user/user'
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from 'src/app/classes/board/board';
import { MainModule } from 'src/app/main/main.module';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private user: User
  // private boardsSubject: BehaviorSubject<Array<Board>>
  // public boards: Observable<Array<Board>>

  constructor(
    private http: HttpClient,
    private dataFlowService: DataFlowService,
    private router: Router
  ) {
    // this.boardsSubject = new BehaviorSubject<Array<Board>>(JSON.parse(this.getBoards()))
    // this.boards = this.boardsSubject.asObservable()
  }

  getBoards() {
    this.http.get<any>('http://172.17.0.1:8080/board/all').subscribe(
      data => {
        this.dataFlowService.passBoardsData(data)
      },
      error => {
        console.log(error)
      }
    )
    return null
  }

  getBoard(id) {
    this.http.get<any>('http://172.17.0.1:8080/board/' + id).subscribe(
      data => {
        this.dataFlowService.passBoardData(data)
      },
      error => console.log(error)
    )
  }

  getStatuses(id) {
    this.http.get<any>('http://172.17.0.1:8080/board/' + id + '/getStatuses').subscribe(
      data => {
        this.dataFlowService.passStatusesData(data)
      },
      error => console.log(error)
    )

  }
}
