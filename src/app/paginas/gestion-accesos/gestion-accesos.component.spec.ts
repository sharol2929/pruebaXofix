import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAccesosComponent } from './gestion-accesos.component';

describe('GestionAccesosComponent', () => {
  let component: GestionAccesosComponent;
  let fixture: ComponentFixture<GestionAccesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAccesosComponent]
    });
    fixture = TestBed.createComponent(GestionAccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
