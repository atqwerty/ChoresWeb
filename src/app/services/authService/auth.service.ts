import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserFlowService } from '../userFlowService/user-flow.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(
    private http: HttpClient,
    private userFlowService: UserFlowService,
    private router: Router,
    private cookies: CookieService
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
    this.http.post<any>('http://172.17.0.1:8080/login', { email, password }, httpOptions).subscribe(
      data => {
        let user = new User(data.email, data.token.token, data.name, data.surname)
        
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        this.userFlowService.passUserData(user)
        this.router.navigateByUrl('main')
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
    console.log(this.cookies.getAll())
  }

  register(email: string, name: string, surname: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow_Origin': '*'
      })
    };
    return this.http.post<any>('http://172.17.0.1:8080/register', { email, name, surname, password }, httpOptions).subscribe(
      data => {
        let user = new User(data.email, data.token.token, data.name, data.surname)
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        this.userFlowService.passUserData(user)
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