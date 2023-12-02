import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsSpinnerVisible, SharedState } from '@shared/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isSpinnerVisible$ = this.store.select(selectIsSpinnerVisible);

  constructor(private store: Store<SharedState>) {}
}
