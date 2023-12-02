import { CharacterModel, FilmModel } from '@shared/models';

export interface FilmsState {
  currentFilm: FilmModel | null;
  currentFilmCharacters: CharacterModel[];
  films: FilmModel[];
}

export const initialState: FilmsState = {
  currentFilm: null,
  currentFilmCharacters: [],
  films: [],
};

export const filmsFeatureKey = 'filmsPage';
