import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedActions } from '@shared/store';
import { finalize, Observable } from 'rxjs';

import { SharedState } from '../../shared/store/shared.state';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private requestsAmount = 0;

  constructor(private store: Store<SharedState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.requestsAmount++;

    if (this.requestsAmount === 1) {
      this.store.dispatch(SharedActions.showSpinner({ payload: true }));
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.requestsAmount--;

        if (!this.requestsAmount) {
          this.store.dispatch(SharedActions.showSpinner({ payload: false }));
        }
      }),
    );
  }
}
