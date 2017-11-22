import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTestComponent } from './param-test.component';

describe('ParamTestComponent', () => {
  let component: ParamTestComponent;
  let fixture: ComponentFixture<ParamTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
