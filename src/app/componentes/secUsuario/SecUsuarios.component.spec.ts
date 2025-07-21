import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SecUsuariosComponent } from './SecUsuarios.component';

describe('SecUsuariosComponent', () => {
  let component: SecUsuariosComponent;
  let fixture: ComponentFixture<SecUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SecUsuariosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
