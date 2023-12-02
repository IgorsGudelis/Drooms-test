import { createActionGroup, props } from '@ngrx/store';

export const SharedActions = createActionGroup({
  source: 'Shared',
  events: {
    'Show Spinner': props<{ payload: boolean }>(),
  },
});
