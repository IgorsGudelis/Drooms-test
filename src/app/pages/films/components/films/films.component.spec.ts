import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';

import { FilmsComponent } from './films.component';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsComponent],
      imports: [MatCardModule, MatDividerModule, SharedModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
