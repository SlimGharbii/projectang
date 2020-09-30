import { TestBed } from '@angular/core/testing';

import { TopdataService } from './topdata.service';

describe('TopdataService', () => {
  let service: TopdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
