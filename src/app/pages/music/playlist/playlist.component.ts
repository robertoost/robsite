import { Component, OnInit, Input, Output, EventEmitter, Sanitizer, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  initizalized: boolean;

  @Input() set url( url: string ) {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl( url );
  }

  public safeUrl: SafeUrl;

  loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor( private domSanitizer: DomSanitizer ) {
  }

  load( event ) {
    if ( this.initizalized ) {
      console.log('event', event);
      this.loaded.next(true);
    }
  }

  ngOnInit() {
    this.initizalized = true;
  }
}
