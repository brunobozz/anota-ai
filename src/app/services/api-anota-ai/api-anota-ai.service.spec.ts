import { TestBed } from '@angular/core/testing';

import { ApiAnotaAiService } from './api-anota-ai.service';

describe('ApiAnotaAiService', () => {
  let service: ApiAnotaAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAnotaAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
