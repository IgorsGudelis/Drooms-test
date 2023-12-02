import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';

import { CharacterDetailsComponent } from './character-details.component';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDetailsComponent],
      imports: [MatCardModule, MatChipsModule, MatDividerModule, SharedModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
