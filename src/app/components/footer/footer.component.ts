import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { AnimateService } from '../../services/animate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  animateSub:Subscription;
  isAnimate:boolean = false;

  constructor(
    private viewportScroller: ViewportScroller,
    private router:Router,
    private animate:AnimateService
  ) { }

  ngOnInit(): void {
    this.animateSub = this.animate.routeChange.subscribe(isAnimate => {
      this.isAnimate = isAnimate;
    });
  }

  homeClicked(event:any){
    event.preventDefault();
    this.router.navigate(['/']);
    this.viewportScroller.scrollToPosition([0,0]);
  }

  sectionClicked(section:string,event:any){
    event.preventDefault();
    this.router.navigate(['/']).then(resp => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(section);
      });
    });
  }

  ngOnDestroy(){
    try{
      this.animateSub.unsubscribe();
    }
    catch(e){
      console.warn('error cleaning up footer: ',e);
    }
  }
}
