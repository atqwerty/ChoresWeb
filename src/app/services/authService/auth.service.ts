import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataFlowService } from '../dataFlowService/data-flow.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(
    private http: HttpClient,
    private dataFlowService: DataFlowService,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };
    this.http.post<any>('https://chores-backend-atqwerty.herokuapp.com/login', { email, password }, httpOptions).subscribe(
      data => {
        // console.log(data)
        let user = new User(data.id, data.email, data.token, data.refresh_token, data.name, data.surname)
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        this.dataFlowService.passUserData(user)
        this.router.navigateByUrl('main')
        // console.log()
        // console.log(data)
      },
      error => {
        console.log(error)
      }
    )
    // console.log(this.cookies.getAll())
  }

  register(email: string, name: string, surname: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow_Origin': '*'
      })
    };
    return this.http.post<any>('https://chores-backend-atqwerty.herokuapp.com/register', { email, name, surname, password }, httpOptions).subscribe(
      data => {
        let user = new User(data.id, data.email, data.token, data.name, data.surname)
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        this.dataFlowService.passUserData(user)
        this.router.navigateByUrl('main')
      },
      error => {
        console.log(error)
      }
    )
  }

  getJwtToken() {
    return localStorage.getItem("token")
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
