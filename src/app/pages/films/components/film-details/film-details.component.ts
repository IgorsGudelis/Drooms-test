import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
  FilmsActions,
  FilmsState,
  selectCurrentFilm,
  selectCurrentFilmCharacters,
} from '../../store';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent implements OnInit, OnDestroy {
  film$ = this.store.select(selectCurrentFilm);
  filmCharacters$ = this.store.select(selectCurrentFilmCharacters);

  constructor(private store: Store<FilmsState>) {}

  ngOnInit(): void {
    setTimeout(() => this.store.dispatch(FilmsActions.getFilm()));
  }

  ngOnDestroy(): void {
    this.store.dispatch(FilmsActions.resetFilmData());
  }
}
