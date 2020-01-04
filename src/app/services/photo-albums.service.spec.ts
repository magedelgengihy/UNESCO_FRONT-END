import { TestBed } from '@angular/core/testing';

import { PhotoAlbumsService } from './photo-albums.service';

describe('PhotoAlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoAlbumsService = TestBed.get(PhotoAlbumsService);
    expect(service).toBeTruthy();
  });
});
