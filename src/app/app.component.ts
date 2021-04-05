import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
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
  animateSub:Subscription;

  constructor(
    private animate:AnimateService
  ){

  }

  ngOnInit(){
    this.animateSub = this.animate.routeChange.subscribe(animateStart => {
      this.isAnimate = animateStart;
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

  ngOnDestroy(){
    try{
      this.animateSub.unsubscribe();
    }
    catch(e){

    }
  }
}
