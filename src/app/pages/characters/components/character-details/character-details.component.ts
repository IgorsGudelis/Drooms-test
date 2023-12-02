import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
  CharactersActions,
  CharactersState,
  selectCurrentCharacter,
  selectCurrentCharacterFilms,
} from '../../store';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  character$ = this.store.select(selectCurrentCharacter);
  characterFilms$ = this.store.select(selectCurrentCharacterFilms);

  constructor(private store: Store<CharactersState>) {}

  ngOnInit(): void {
    setTimeout(() => this.store.dispatch(CharactersActions.getCharacter()));
  }

  ngOnDestroy(): void {
    this.store.dispatch(CharactersActions.resetCharacterData());
  }
}
