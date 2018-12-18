import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { BackgroundStyleService } from '../../services/background-style.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit, OnDestroy {
  stop$ = new Subject<void>();
  backgroundLit$ = this.backgroundStyle.backgroundLit$;
  @HostBinding('class.show') lit = false;

  constructor( private backgroundStyle: BackgroundStyleService ) { }

  ngOnInit() {
    this.backgroundLit$.pipe( takeUntil( this.stop$ ) ).subscribe( ( lit ) => {
      this.lit = lit;
    } );
  }

  ngOnDestroy() {
    this.stop$.next();
  }
}
