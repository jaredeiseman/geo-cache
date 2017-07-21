import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCachesComponent } from './view-all-caches.component';

describe('ViewAllCachesComponent', () => {
  let component: ViewAllCachesComponent;
  let fixture: ComponentFixture<ViewAllCachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
