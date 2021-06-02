import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
 ;

import { from, Observable } from 'rxjs';



declare var base_url: any;

@Injectable()
export class APIInterceptor implements HttpInterceptor {


  // unconment this to suing auth service


  public token: any = '';
  constructor() {

  }



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {



    let changedRequest = request;
    // HttpHeader object immutable - copy values
    const headerSettings: { [name: string]: string | string[]; } = {};

    // unconment this to suing auth service

    changedRequest = request.clone({

     });

    // console.log(changedRequest);
    return next.handle(changedRequest).toPromise();
  }




}
