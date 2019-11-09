import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFlowService } from '../userFlowService/user-flow.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from 'src/app/classes/board/board';
import { MainModule } from 'src/app/main/main.module';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  // private boardsSubject: BehaviorSubject<Array<Board>>
  // public boards: Observable<Board>

  constructor(
    private http: HttpClient,
    private userFlowService: UserFlowService,
    private router: Router
  ) { }

  getBoards() {
    // console.log(localStorage.getItem('currentUser'))
  }
}
