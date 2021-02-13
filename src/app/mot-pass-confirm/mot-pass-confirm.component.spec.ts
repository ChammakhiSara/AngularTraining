import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotPassConfirmComponent } from './mot-pass-confirm.component';

describe('MotPassConfirmComponent', () => {
  let component: MotPassConfirmComponent;
  let fixture: ComponentFixture<MotPassConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotPassConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPassConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
