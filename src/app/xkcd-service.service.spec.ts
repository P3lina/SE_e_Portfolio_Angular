import { TestBed } from '@angular/core/testing';

import { XkcdServiceService } from './xkcd-service.service';

describe('XkcdServiceService', () => {
  let service: XkcdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XkcdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
