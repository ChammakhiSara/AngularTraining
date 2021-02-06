import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifAgencesComponent } from './ajout-modif-agences.component';

describe('AjoutModifAgencesComponent', () => {
  let component: AjoutModifAgencesComponent;
  let fixture: ComponentFixture<AjoutModifAgencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutModifAgencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutModifAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
