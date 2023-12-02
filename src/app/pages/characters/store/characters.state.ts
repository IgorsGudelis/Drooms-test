import { CharacterModel, FilmModel } from '@shared/models';

export interface CharactersState {
  currentCharacter: CharacterModel | null;
  currentCharacterFilms: FilmModel[];
}

export const initialState: CharactersState = {
  currentCharacter: null,
  currentCharacterFilms: [],
};

export const charactersFeatureKey = 'charactersPage';
