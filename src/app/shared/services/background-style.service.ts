import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundStyleService {

  private _backgroundLit$$ = new BehaviorSubject(false);
  private _backgroundLit$ = this._backgroundLit$$.asObservable();

  public get backgroundLit$() {
    return this._backgroundLit$;
  }

  public toggleBackground( isLit: boolean ) {
    this._backgroundLit$$.next( isLit );
  }

  constructor() { }

}
