import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { swipe } from './animations/routeAnimations';
import { AnimateService } from './services/animate.service';

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
  isAnimate:boolean = false;

  constructor(
    private animate:AnimateService,
    private viewportScroller: ViewportScroller
  ){

  }

  ngOnInit(){
    this.animate.routeChange.subscribe(animateStart => {
      this.isAnimate = animateStart;
      if(this.isAnimate){
        this.viewportScroller.scrollToPosition([0,0]);
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onAnimateStart(event:any){
    this.animate.setRouteChange(true)
  }

  onAnimateEnd(event:any){
    this.animate.setRouteChange(false)
  }
}
