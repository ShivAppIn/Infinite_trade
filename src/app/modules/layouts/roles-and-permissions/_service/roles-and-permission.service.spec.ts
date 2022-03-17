import { TestBed } from '@angular/core/testing';

import { RolesAndPermissionService } from './roles-and-permission.service';

describe('RolesAndPermissionService', () => {
  let service: RolesAndPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesAndPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
