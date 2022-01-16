import { TestBed } from '@angular/core/testing';

import { MemberRoleService } from './member-role.service';

describe('MemberRoleService', () => {
  let service: MemberRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
