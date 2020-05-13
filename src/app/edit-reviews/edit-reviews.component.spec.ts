import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReviewsComponent } from './edit-reviews.component';

describe('EditReviewsComponent', () => {
  let component: EditReviewsComponent;
  let fixture: ComponentFixture<EditReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
