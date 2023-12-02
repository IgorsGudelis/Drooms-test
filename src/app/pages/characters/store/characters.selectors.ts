import { createFeatureSelector, createSelector } from '@ngrx/store';

import { charactersFeatureKey, CharactersState } from './characters.state';

export const selectCharactersFeature =
  createFeatureSelector<CharactersState>(charactersFeatureKey);

export const selectCurrentCharacter = createSelector(
  selectCharactersFeature,
  (state: CharactersState) => state.currentCharacter,
);

export const selectCurrentCharacterFilms = createSelector(
  selectCharactersFeature,
  (state: CharactersState) => state.currentCharacterFilms,
);
