import { TestBed } from '@angular/core/testing';

import { UserFlowService } from './user-flow.service';

describe('UserFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFlowService = TestBed.get(UserFlowService);
    expect(service).toBeTruthy();
  });
});
