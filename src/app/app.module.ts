import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptorService } from './services/httpTokenInterceptor/http-token-interceptor.service';
import { ErrorInterceptorService } from './services/httpErrorInterceptor/error-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MainModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    CookieService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }