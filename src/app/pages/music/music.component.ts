import { Component, ViewEncapsulation, AfterViewInit, QueryList, ViewChildren, OnInit } from '@angular/core';
import { PlaylistComponent } from './playlist/playlist.component';
import { skip, first, filter } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MusicComponent implements AfterViewInit {

  @ViewChildren(PlaylistComponent) playlistElements: QueryList<PlaylistComponent>;

  playlistsVisible: boolean;
  public playlists = [
    'https://open.spotify.com/embed/user/sponsrob/playlist/1CVz8rad4rySVAU3aYvh5x',
    'https://open.spotify.com/embed/user/sponsrob/playlist/4Xvy2yD9FzwNppIjvX40Km',
    'https://open.spotify.com/embed/user/sponsrob/playlist/7LZVkv8mmswubQfHDs3R3Z'
  ];

  constructor() { }

  ngAfterViewInit() {
    this.revealPlaylist();
  }

  async revealPlaylist() {
    const observables = this.playlistElements.map( playlist => playlist.loaded.pipe( filter( load => load ), first() ) );

    const joined = await forkJoin( observables ).pipe( first() ).toPromise();
    console.log( 'visible', joined );
    this.playlistsVisible = true;
  }
}
