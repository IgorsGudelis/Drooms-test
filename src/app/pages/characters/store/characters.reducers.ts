import { createReducer, on } from '@ngrx/store';

import { CharactersActions } from './characters.actions';
import { initialState } from './characters.state';

export const charactersReducer = createReducer(
  initialState,
  on(CharactersActions.getCharacterSuccess, (state, { payload }) => ({
    ...state,
    currentCharacter: payload,
  })),
  on(CharactersActions.getCharacterFilmsSuccess, (state, { payload }) => ({
    ...state,
    currentCharacterFilms: payload,
  })),
  on(CharactersActions.resetCharacterData, state => ({
    ...state,
    currentCharacter: null,
    currentCharacterFilms: [],
  })),
);
