// #docplaster
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RequestCacheService } from '../services';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private requestCacheService: RequestCacheService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.requestCacheService.getCachedResponse(request);

    return cachedResponse
      ? of(cachedResponse)
      : this.sendRequest(request, next);
  }

  private sendRequest(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.requestCacheService.setCache(request, event);
        }
      }),
    );
  }
}
