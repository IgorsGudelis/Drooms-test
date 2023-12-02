import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CharacterModel, FilmModel } from '@shared/models';

export const CharactersActions = createActionGroup({
  source: 'Characters',
  events: {
    'Get Character': emptyProps(),
    'Get Character Success': props<{ payload: CharacterModel }>(),
    'Get Character Films': props<{ payload: string[] }>(),
    'Get Character Films Success': props<{ payload: FilmModel[] }>(),
    'Reset Character Data': emptyProps(),
  },
});
