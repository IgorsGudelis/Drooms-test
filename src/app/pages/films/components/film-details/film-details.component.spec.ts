import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';

import { FilmDetailsComponent } from './film-details.component';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailsComponent],
      imports: [MatCardModule, MatChipsModule, MatDividerModule, SharedModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
