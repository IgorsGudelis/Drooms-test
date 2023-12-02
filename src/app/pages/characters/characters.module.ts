import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {
  CharactersEffects,
  charactersFeatureKey,
  charactersReducer,
} from './store';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CharactersRoutingModule,
    EffectsModule.forFeature([CharactersEffects]),
    StoreModule.forFeature(charactersFeatureKey, charactersReducer),
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    SharedModule,
  ],
})
export class CharactersModule {}
