import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMovieHeadComponent } from './affiche-movie-head.component';

describe('AfficheMovieHeadComponent', () => {
  let component: AfficheMovieHeadComponent;
  let fixture: ComponentFixture<AfficheMovieHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheMovieHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheMovieHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
