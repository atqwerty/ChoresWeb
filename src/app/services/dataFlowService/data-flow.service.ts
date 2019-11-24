import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {
  passUserData$: Observable<any>
  passBoardsData$: Observable<any>
  passBoardData$: Observable<any>
  private passUserDataSubject = new Subject<any>()
  private passBoardsDataSubject = new Subject<any>()
  private passBoardDataSubject = new Subject<any>()

  constructor() { 
    this.passUserData$ = this.passUserDataSubject.asObservable();
    this.passBoardsData$ = this.passBoardsDataSubject.asObservable();
    this.passBoardData$ = this.passBoardDataSubject.asObservable();
  }

  passUserData = (data) => {
    this.passUserDataSubject.next(data);
  }

  passBoardsData = (data) => {
    this.passBoardsDataSubject.next(data);
  }

  passBoardData = (data) => {
    this.passBoardDataSubject.next(data);
  }
}
