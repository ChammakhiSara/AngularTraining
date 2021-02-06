import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifUsersComponent } from './modif-users.component';

describe('ModifUsersComponent', () => {
  let component: ModifUsersComponent;
  let fixture: ComponentFixture<ModifUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
