import { Component, OnInit } from '@angular/core';
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
    private animate:AnimateService
  ) { }

  ngOnInit(): void {
    this.animateSub = this.animate.routeChange.subscribe(animateStart => {
      this.isAnimate = animateStart;
    });
  }

  onAnimate(event:any){
    console.log(event);
  }

  ngOnDestroy(){
    try{
      this.animateSub.unsubscribe();
    }
    catch(e){

    }
  }
}
