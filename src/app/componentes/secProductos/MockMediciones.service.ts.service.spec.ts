import { TestBed, inject } from '@angular/core/testing';
import { MockProductosService } from './ServiceProductos';

describe('Service: MockProductosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProductosService]
    });
  });

  it('should be created', inject([MockProductosService], (service: MockProductosService) => {
    expect(service).toBeTruthy();
  }));
});
