import { TestBed } from '@angular/core/testing';

import { GetterFirebaseService } from './getter-firebase.service';

describe('GetterJsonService', () => {
  let service: GetterFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetterFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
