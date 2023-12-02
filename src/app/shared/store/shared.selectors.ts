import { createFeatureSelector, createSelector } from '@ngrx/store';

import { sharedFeatureKey, SharedState } from './shared.state';

export const selectSharedFeature =
  createFeatureSelector<SharedState>(sharedFeatureKey);

export const selectIsSpinnerVisible = createSelector(
  selectSharedFeature,
  (state: SharedState) => state.isSpinnerVisible,
);
