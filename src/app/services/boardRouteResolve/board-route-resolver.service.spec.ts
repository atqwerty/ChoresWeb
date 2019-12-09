import { TestBed } from '@angular/core/testing';

import { BoardRouteResolverService } from './board-route-resolver.service';

describe('BoardRouteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardRouteResolverService = TestBed.get(BoardRouteResolverService);
    expect(service).toBeTruthy();
  });
});
