import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMovieFootComponent } from './affiche-movie-foot.component';

describe('AfficheMovieFootComponent', () => {
  let component: AfficheMovieFootComponent;
  let fixture: ComponentFixture<AfficheMovieFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheMovieFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheMovieFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
