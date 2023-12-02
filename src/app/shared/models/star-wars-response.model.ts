import { CharacterModel } from './character.model';
import { FilmModel } from './film.model';

export interface StarWarsResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: CharacterModel[] | FilmModel[];
}
