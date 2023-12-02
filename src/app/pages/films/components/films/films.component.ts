import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FilmsActions, FilmsState, selectFilms } from '../../store';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
  films$ = this.store.select(selectFilms);

  constructor(private store: Store<FilmsState>) {}

  ngOnInit(): void {
    setTimeout(() => this.store.dispatch(FilmsActions.getFilms()));
  }
}
