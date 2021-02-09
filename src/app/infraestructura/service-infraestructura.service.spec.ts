import { TestBed } from '@angular/core/testing';

import { ServiceInfraestructuraService } from './service-infraestructura.service';

describe('ServiceInfraestructuraService', () => {
  let service: ServiceInfraestructuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInfraestructuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
