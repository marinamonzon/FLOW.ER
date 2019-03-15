import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsersComponent } from './parsers.component';

describe('ParsersComponent', () => {
  let component: ParsersComponent;
  let fixture: ComponentFixture<ParsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
