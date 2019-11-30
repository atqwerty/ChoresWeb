import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authService/auth.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private http: HttpClient) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
     return next.handle(request).pipe(
      catchError(err => {
        if(err.status == 401) {
          console.log(request)
          const httpOptions = {
            headers: new HttpHeaders({ 
              'Content-Type': 'application/json',
              'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).refreshToken
            })
          };
          this.http.get('https://chores-backend-atqwerty.herokuapp.com/refresh', httpOptions).subscribe(
            data => {
              console.log(data)
              next.handle(request)
              window.location.reload()
            },
            error => {
              console.log(error)
              return throwError(error)
            }
          )
          console.log('must be it')
          return throwError('well....')
        }

        const error = err.error.message || err.statusText
      })
    )
  }
}
