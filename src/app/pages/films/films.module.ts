import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { FilmDetailsComponent, FilmsComponent } from './components';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsEffects, filmsFeatureKey, filmsReducer } from './store';

@NgModule({
  declarations: [FilmsComponent, FilmDetailsComponent],
  imports: [
    EffectsModule.forFeature([FilmsEffects]),
    FilmsRoutingModule,
    StoreModule.forFeature(filmsFeatureKey, filmsReducer),
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    SharedModule,
  ],
})
export class FilmsModule {}
