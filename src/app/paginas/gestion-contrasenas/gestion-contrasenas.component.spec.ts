import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContrasenasComponent } from './gestion-contrasenas.component';

describe('GestionContrasenasComponent', () => {
  let component: GestionContrasenasComponent;
  let fixture: ComponentFixture<GestionContrasenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionContrasenasComponent]
    });
    fixture = TestBed.createComponent(GestionContrasenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
