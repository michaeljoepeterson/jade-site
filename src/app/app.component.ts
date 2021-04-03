import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { swipe } from './animations/routeAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    swipe
  ]
})
export class AppComponent {
  title = 'jaded';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
