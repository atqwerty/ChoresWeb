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
    this.http.get<any>('https://chores-backend-atqwerty.herokuapp.com/board/all').subscribe(
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
    this.http.get<any>('https://chores-backend-atqwerty.herokuapp.com/board/' + id).subscribe(
      data => {
        this.dataFlowService.passBoardData(data)
      },
      error => console.log(error)
    )
  }

  addBoard(title, description) {
    return this.http.post<any>('https://chores-backend-atqwerty.herokuapp.com/board/create', { title, description })
  }

  getStatuses(id) {
    this.http.get<any>('https://chores-backend-atqwerty.herokuapp.com/board/' + id + '/getStatuses').subscribe(
      data => {
        this.dataFlowService.passStatusesData(data)
      },
      error => console.log(error)
    )
  }

  addStatus(status) {
    return this.http.post<any>('https://chores-backend-atqwerty.herokuapp.com/board/newStatus', { status })
  }
}
