import { TestBed } from '@angular/core/testing';

import { GitHubService } from './http-request.service';

describe('HttpRequestService', () => {
  let service: GitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
