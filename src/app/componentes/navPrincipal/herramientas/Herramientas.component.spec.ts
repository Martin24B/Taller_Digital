import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasComponent } from './Herramientas.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from '../../secProductos/SecProductos.component';

describe('HerramientasComponent', () => {
  let component: HerramientasComponent;
  let fixture: ComponentFixture<HerramientasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ProductosComponent, HerramientasComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
