import { TestBed, inject } from '@angular/core/testing';

import { DocsService } from './docs.service';

describe('DocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocsService]
    });
  });

  it('should ...', inject([DocsService], (service: DocsService) => {
    expect(service).toBeTruthy();
  }));
});
