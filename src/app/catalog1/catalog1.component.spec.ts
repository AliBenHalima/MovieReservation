import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalog1Component } from './catalog1.component';

describe('Catalog1Component', () => {
  let component: Catalog1Component;
  let fixture: ComponentFixture<Catalog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catalog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catalog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
