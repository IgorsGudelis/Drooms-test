import { createReducer, on } from '@ngrx/store';

import { SharedActions } from './shared.actions';
import { initialState } from './shared.state';

export const sharedReducer = createReducer(
  initialState,
  on(SharedActions.showSpinner, (state, { payload }) => ({
    ...state,
    isSpinnerVisible: payload,
  })),
);
