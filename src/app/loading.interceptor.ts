import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(
    private loadingService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.totalRequests++;

    //start spinner when intercept Http request
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        
        this.totalRequests--;
        if (this.totalRequests == 0) {
          
          //stop spinner when no request left
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}