import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteveWidgetComponent } from './steve-widget.component';

describe('SteveWidgetComponent', () => {
  let component: SteveWidgetComponent;
  let fixture: ComponentFixture<SteveWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteveWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
