import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StarWarsApiService } from '@shared/services';
import { SharedState } from '@shared/store';
import { selectParams } from '@shared/store/router';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CharactersActions } from './characters.actions';

@Injectable()
export class CharactersEffects {
  getCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getCharacter),
      concatLatestFrom(() => [this.store.select(selectParams)]),
      switchMap(([_, params]) =>
        this.starWarsApiService.getCharacterById(params['characterId']).pipe(
          map(response =>
            CharactersActions.getCharacterSuccess({ payload: response }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  getCharacterSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getCharacterSuccess),
      map(({ payload: { films } }) =>
        CharactersActions.getCharacterFilms({ payload: films }),
      ),
    ),
  );

  getCharacterFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getCharacterFilms),
      switchMap(({ payload }) =>
        this.starWarsApiService.getCharacterFilms(payload).pipe(
          map(response =>
            CharactersActions.getCharacterFilmsSuccess({ payload: response }),
          ),
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
