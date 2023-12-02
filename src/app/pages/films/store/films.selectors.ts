import { createFeatureSelector, createSelector } from '@ngrx/store';

import { filmsFeatureKey, FilmsState } from './films.state';

export const selectFilmsFeature =
  createFeatureSelector<FilmsState>(filmsFeatureKey);

export const selectCurrentFilm = createSelector(
  selectFilmsFeature,
  (state: FilmsState) => state.currentFilm,
);

export const selectCurrentFilmCharacters = createSelector(
  selectFilmsFeature,
  (state: FilmsState) => state.currentFilmCharacters,
);

export const selectFilms = createSelector(
  selectFilmsFeature,
  (state: FilmsState) => state.films,
);
