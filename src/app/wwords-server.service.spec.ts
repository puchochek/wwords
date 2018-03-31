import { TestBed, inject } from '@angular/core/testing';

import { WwordsServerService } from './wwords-server.service';

describe('WwordsServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WwordsServerService]
    });
  });

  it('should be created', inject([WwordsServerService], (service: WwordsServerService) => {
    expect(service).toBeTruthy();
  }));
});
