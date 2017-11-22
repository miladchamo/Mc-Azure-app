import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HhAdminComponent } from './hh-admin.component';

describe('HhAdminComponent', () => {
  let component: HhAdminComponent;
  let fixture: ComponentFixture<HhAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
