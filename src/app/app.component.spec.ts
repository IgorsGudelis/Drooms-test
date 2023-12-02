import { TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { selectIsSpinnerVisible } from '@shared/store';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        MatToolbarModule,
        RouterTestingModule,
      ],
      declarations: [AppComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectIsSpinnerVisible,
              value: false,
            },
          ],
        }),
      ],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
