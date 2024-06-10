import { TestBed } from '@angular/core/testing';

import { InputOptionService } from './input-option.service';

describe('InputOptionService', () => {
  let service: InputOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
