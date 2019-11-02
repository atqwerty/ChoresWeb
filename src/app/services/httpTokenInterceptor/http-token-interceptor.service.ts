import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptorService implements HttpInterceptor {
  private refreshTokenInProgress = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  )
  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.getToken()) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Basic ${currentUser.getToken()}`
            }
        });
    }

    return next.handle(request);
}
}
