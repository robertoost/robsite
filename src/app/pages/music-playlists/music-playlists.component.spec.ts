import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlaylistsComponent } from './music-playlists.component';

describe('MusicPlaylistsComponent', () => {
  let component: MusicPlaylistsComponent;
  let fixture: ComponentFixture<MusicPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
