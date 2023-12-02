import { createReducer, on } from '@ngrx/store';

import { FilmsActions } from './films.actions';
import { initialState } from './films.state';

export const filmsReducer = createReducer(
  initialState,
  on(FilmsActions.getFilmSuccess, (state, { payload }) => ({
    ...state,
    currentFilm: payload,
  })),
  on(FilmsActions.getFilmCharactersSuccess, (state, { payload }) => ({
    ...state,
    currentFilmCharacters: payload,
  })),
  on(FilmsActions.getFilmsSuccess, (state, { payload }) => ({
    ...state,
    films: payload,
  })),
  on(FilmsActions.resetFilmData, state => ({
    ...state,
    currentFilm: null,
    currentFilmCharacters: [],
  })),
);
