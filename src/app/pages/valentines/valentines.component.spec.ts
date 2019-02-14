import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinesComponent } from './valentines.component';

describe('ValentinesComponent', () => {
  let component: ValentinesComponent;
  let fixture: ComponentFixture<ValentinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValentinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValentinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
