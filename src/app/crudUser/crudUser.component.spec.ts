import { UserComponent } from './crudUser.component';
// import { CrudUsersComponent } from './../admin-dashboard/crud-users/crud-users.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { UserComponent } from './crudUser/crudUser.component';
// import { CrudUsersComponent } from './crudUser.component';

describe('CrudUsersComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
