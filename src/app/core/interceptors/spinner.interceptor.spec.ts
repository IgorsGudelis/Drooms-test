import { HttpRequest, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedActions } from '@shared/store';
import { finalize, of } from 'rxjs';

import { SharedState } from '../../shared/store/shared.state';
import { SpinnerInterceptor } from './spinner.interceptor';

describe('SpinnerInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [SpinnerInterceptor, provideMockStore()],
    }),
  );

  it('should be created', () => {
    const interceptor: SpinnerInterceptor = TestBed.inject(SpinnerInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('expects "intercept" to dispatch show/hide spinner', (done: DoneFn) => {
    const interceptor: SpinnerInterceptor = TestBed.inject(SpinnerInterceptor);
    const handler = {
      handle: (req: HttpRequest<unknown>) => {
        return of(new HttpResponse(req));
      },
    };
    const request = new HttpRequest('GET', '');
    const store = TestBed.inject(Store<SharedState>);
    const storeSpy = spyOn(store, 'dispatch');
    const res = interceptor.intercept(request, handler);

    expect(storeSpy).toHaveBeenCalledWith(
      SharedActions.showSpinner({ payload: true }),
    );

    res
      .pipe(
        finalize(() => {
          expect(storeSpy).toHaveBeenCalledWith(
            SharedActions.showSpinner({ payload: false }),
          );
        }),
      )
      .subscribe();

    done();
  });
});
