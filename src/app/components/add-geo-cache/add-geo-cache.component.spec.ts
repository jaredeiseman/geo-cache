import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeoCacheComponent } from './add-geo-cache.component';

describe('AddGeoCacheComponent', () => {
  let component: AddGeoCacheComponent;
  let fixture: ComponentFixture<AddGeoCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeoCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeoCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
