import { TestBed } from '@angular/core/testing';

import { BackgroundStyleService } from './background-style.service';

describe('BackgroundStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackgroundStyleService = TestBed.get(BackgroundStyleService);
    expect(service).toBeTruthy();
  });
});
