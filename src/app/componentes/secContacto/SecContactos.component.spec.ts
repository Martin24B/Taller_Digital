import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SecContactosComponent } from './SecContacto.component';

describe('SecContactoComponent', () => {
  let component: SecContactosComponent;
  let fixture: ComponentFixture<SecContactosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SecContactosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
