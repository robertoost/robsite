import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOriginalComponent } from './music-original.component';

describe('MusicOriginalComponent', () => {
  let component: MusicOriginalComponent;
  let fixture: ComponentFixture<MusicOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicOriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
