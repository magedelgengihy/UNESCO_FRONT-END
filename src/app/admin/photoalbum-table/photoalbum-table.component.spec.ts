import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoalbumTableComponent } from './photoalbum-table.component';

describe('PhotoalbumTableComponent', () => {
  let component: PhotoalbumTableComponent;
  let fixture: ComponentFixture<PhotoalbumTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoalbumTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoalbumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
