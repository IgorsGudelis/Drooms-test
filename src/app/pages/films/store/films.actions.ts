import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CharacterModel, FilmModel } from '@shared/models';

export const FilmsActions = createActionGroup({
  source: 'Films',
  events: {
    'Get Film': emptyProps(),
    'Get Film Success': props<{ payload: FilmModel }>(),
    'Get Film Characters': props<{ payload: string[] }>(),
    'Get Film Characters Success': props<{ payload: CharacterModel[] }>(),
    'Get Films': emptyProps(),
    'Get Films Success': props<{ payload: FilmModel[] }>(),
    'Reset Film Data': emptyProps(),
  },
});
