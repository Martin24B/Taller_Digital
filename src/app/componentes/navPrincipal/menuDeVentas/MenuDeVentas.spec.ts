import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeVentas } from './MenuDeVentas.component';

describe('MenuDeVentas', () => {
  let component: MenuDeVentas;
  let fixture: ComponentFixture<MenuDeVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDeVentas],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDeVentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
