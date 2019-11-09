import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {
  passUserData$: Observable<any>
  passBoardsData$: Observable<any>
  private passUserDataSubject = new Subject<any>()
  private passBoardsDataSubject = new Subject<any>()

  constructor() { 
    this.passUserData$ = this.passUserDataSubject.asObservable();
    this.passBoardsData$ = this.passBoardsDataSubject.asObservable();
  }

  passUserData = (data) => {
    this.passUserDataSubject.next(data);
  }

  passBoardsData = (data) => {
    this.passBoardsDataSubject.next(data);
  }
}
