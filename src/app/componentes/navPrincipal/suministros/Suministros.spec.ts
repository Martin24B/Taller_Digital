import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministrosComponent } from './Suministros.component';

describe('Suministros', () => {
  let component: SuministrosComponent;
  let fixture: ComponentFixture<SuministrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuministrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuministrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
