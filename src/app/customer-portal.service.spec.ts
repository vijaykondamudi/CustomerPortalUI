import { TestBed } from '@angular/core/testing';

import { CustomerPortalService } from './customer-portal.service';

describe('CustomerPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerPortalService = TestBed.get(CustomerPortalService);
    expect(service).toBeTruthy();
  });
});
