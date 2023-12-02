import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CachingInterceptor } from './caching.interceptor';
import { SpinnerInterceptor } from './spinner.interceptor';

export const HTTP_INTERCEPTORS_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CachingInterceptor,
    multi: true,
  },
];
