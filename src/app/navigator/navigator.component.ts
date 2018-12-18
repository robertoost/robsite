import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../shared/animations/animations';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [routerTransition]
})
export class NavigatorComponent {
  getState( outlet: RouterOutlet ) {
    return outlet.activatedRouteData.state;
  }
}
