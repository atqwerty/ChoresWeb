import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFlowService {
  passUserData$: Observable<any>
  private passUserDataSubject = new Subject<any>()

  constructor() { 
    this.passUserData$ = this.passUserDataSubject.asObservable();
  }

  passUserData = (data) => {
    this.passUserDataSubject.next(data);
  }
}
