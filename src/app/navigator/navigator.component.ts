import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../shared/animations/animations';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition]
})
export class NavigatorComponent {
  public pages: string[] = [
    'music', 'art', 'games', 'contact'
  ];

  getState( outlet: RouterOutlet ) {
    return outlet.activatedRouteData.state;
  }
}
