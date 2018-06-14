import { TestBed, inject } from '@angular/core/testing';

import { ContactResolverService } from './contact-resolver.service';

describe('GameResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactResolverService]
    });
  });

  it('should be created', inject([ContactResolverService], (service: ContactResolverService) => {
    expect(service).toBeTruthy();
  }));
});
