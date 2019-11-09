import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFlowService } from '../userFlowService/user-flow.service';
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
  // public boards: Observable<Board>

  constructor(
    private http: HttpClient,
    private userFlowService: UserFlowService,
    private router: Router
  ) { }

  getBoards() {
    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.http.get<any>('http://172.17.0.1:8080/board/all').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }
}
