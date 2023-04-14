import { TestBed } from '@angular/core/testing';

import { TaskFileSystemApiService } from './task-file-system-api.service';

describe('TaskFileSystemApiService', () => {
  let service: TaskFileSystemApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskFileSystemApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
