import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplFormArrayComponent } from './exempl-form-array.component';

describe('ExemplFormArrayComponent', () => {
  let component: ExemplFormArrayComponent;
  let fixture: ComponentFixture<ExemplFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
