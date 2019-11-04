import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../authService/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('asdf')
    return next.handle(request).pipe(
      catchError(err => {
        if(err.status == 401) {
          console.log("asdf")
          this.authService.logout() // TODO: wait to reload token
          location.reload(true)
        }

        const error = err.error.message || err.statusText
        return throwError(error)
      })
    )
  }
}
