import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichMoviecarouselComponent } from './affich-moviecarousel.component';

describe('AffichMoviecarouselComponent', () => {
  let component: AffichMoviecarouselComponent;
  let fixture: ComponentFixture<AffichMoviecarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichMoviecarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichMoviecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
