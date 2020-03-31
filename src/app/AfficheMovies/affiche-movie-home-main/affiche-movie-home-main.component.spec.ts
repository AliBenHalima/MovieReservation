import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMovieHomeMainComponent } from './affiche-movie-home-main.component';

describe('AfficheMovieHomeMainComponent', () => {
  let component: AfficheMovieHomeMainComponent;
  let fixture: ComponentFixture<AfficheMovieHomeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheMovieHomeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheMovieHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
