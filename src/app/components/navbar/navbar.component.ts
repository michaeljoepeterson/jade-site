import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimateService } from '../../services/animate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAnimate:boolean = false;
  animateSub:Subscription;

  constructor(
    private animate:AnimateService,
    private viewportScroller: ViewportScroller,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.animateSub = this.animate.routeChange.subscribe(animateStart => {
      this.isAnimate = animateStart;
    });
  }

  onAnimate(event:any){
    console.log(event);
  }

  homeClicked(event:any){
    event.preventDefault();
    this.router.navigate(['/']);
    this.viewportScroller.scrollToPosition([0,0]);
  }

  ngOnDestroy(){
    try{
      this.animateSub.unsubscribe();
    }
    catch(e){

    }
  }
}
