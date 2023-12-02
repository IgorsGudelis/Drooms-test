import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StarWarsApiService } from '@shared/services';
import { SharedState } from '@shared/store';
import { selectParams } from '@shared/store/router';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FilmsActions } from './films.actions';

@Injectable()
export class FilmsEffects {
  getFilm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.getFilm),
      concatLatestFrom(() => [this.store.select(selectParams)]),
      switchMap(([_, params]) =>
        this.starWarsApiService.getFilmById(params['filmId']).pipe(
          map(response => FilmsActions.getFilmSuccess({ payload: response })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  getFilmSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.getFilmSuccess),
      map(({ payload: { characters } }) =>
        FilmsActions.getFilmCharacters({ payload: characters }),
      ),
    ),
  );

  getFilmCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.getFilmCharacters),
      switchMap(({ payload }) =>
        this.starWarsApiService.getFilmCharacters(payload).pipe(
          map(response =>
            FilmsActions.getFilmCharactersSuccess({ payload: response }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  getFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.getFilms),
      switchMap(() =>
        this.starWarsApiService.getFilms().pipe(
          map(response => FilmsActions.getFilmsSuccess({ payload: response })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private starWarsApiService: StarWarsApiService,
    private store: Store<SharedState>,
  ) {}
}
