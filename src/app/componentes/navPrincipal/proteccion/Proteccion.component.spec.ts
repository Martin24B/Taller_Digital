import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionComponent } from './Proteccion.component';

describe('Proteccion', () => {
  let component: ProteccionComponent;
  let fixture: ComponentFixture<ProteccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteccionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProteccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
