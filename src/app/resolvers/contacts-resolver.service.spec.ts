import { TestBed } from '@angular/core/testing';

import { ContactsResolverService } from './contacts-sersolver.service';

describe('ContactsResolverService', () => {
  let service: ContactsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
