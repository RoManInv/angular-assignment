import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThcComponent } from './thc.component';

describe('ThcComponent', () => {
  let component: ThcComponent;
  let fixture: ComponentFixture<ThcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
