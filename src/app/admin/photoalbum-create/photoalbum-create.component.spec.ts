import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoalbumCreateComponent } from './photoalbum-create.component';

describe('PhotoalbumCreateComponent', () => {
  let component: PhotoalbumCreateComponent;
  let fixture: ComponentFixture<PhotoalbumCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoalbumCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoalbumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
